import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { documentsSchema, Documents } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Label } from '../../ui/label'
import { Upload, File, X, AlertCircle } from 'lucide-react'
import { supabase } from '../../../lib/supabase/client'

interface DocumentsStepProps {
    data: Documents
    onNext: (data: Documents) => void
    onBack: () => void
    isSubmitting?: boolean // Add this prop
}

export default function DocumentsStep({ data, onNext, onBack, isSubmitting = false }: DocumentsStepProps) {
    const [uploading, setUploading] = useState(false)
    const [uploadError, setUploadError] = useState('')

    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<Documents>({
        resolver: zodResolver(documentsSchema),
        defaultValues: data,
    })

    const watchedDocuments = watch('documents') || []

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files || files.length === 0) return

        setUploading(true)
        setUploadError('')

        try {
            // Check if Supabase client is properly configured
            if (!supabase) {
                throw new Error('Supabase client not initialized')
            }

            const uploadPromises = Array.from(files).map(async (file) => {
                console.log('Uploading file:', file.name, file.size, file.type)

                // Validate file size (10MB limit)
                if (file.size > 10 * 1024 * 1024) {
                    throw new Error(`File ${file.name} exceeds 10MB limit`)
                }

                // Validate file type
                const allowedTypes = [
                    'application/pdf',
                    'image/jpeg',
                    'image/jpg',
                    'image/png',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ]

                if (!allowedTypes.includes(file.type)) {
                    throw new Error(`File ${file.name} has unsupported format. Allowed: PDF, JPG, PNG, DOC, DOCX`)
                }

                // Generate unique filename
                const fileExt = file.name.split('.').pop()
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
                const filePath = `applications/${fileName}`

                console.log('Uploading to path:', filePath)

                // Upload to Supabase Storage
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('documents')
                    .upload(filePath, file, {
                        cacheControl: '3600',
                        upsert: false
                    })

                console.log('Upload response:', { uploadData, uploadError })

                if (uploadError) {
                    console.error('Upload error details:', uploadError)
                    throw new Error(`Failed to upload ${file.name}: ${uploadError.message}`)
                }

                // Get public URL
                const { data: urlData } = supabase.storage
                    .from('documents')
                    .getPublicUrl(filePath)

                console.log('Public URL:', urlData)

                return {
                    name: file.name,
                    url: urlData.publicUrl,
                    size: file.size,
                }
            })

            const uploadedFiles = await Promise.all(uploadPromises)
            const currentDocuments = watchedDocuments || []
            setValue('documents', [...currentDocuments, ...uploadedFiles])

            console.log('Successfully uploaded files:', uploadedFiles)

        } catch (error) {
            console.error('Upload failed:', error)
            setUploadError(error instanceof Error ? error.message : 'Upload failed. Please try again.')
        } finally {
            setUploading(false)
            // Reset file input
            event.target.value = ''
        }
    }

    const removeDocument = (index: number) => {
        const currentDocuments = watchedDocuments || []
        const updatedDocuments = currentDocuments.filter((_, i) => i !== index)
        setValue('documents', updatedDocuments)
    }

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Document Upload</h2>
                <p className="text-gray-600">Please upload all required documents (max 10MB each)</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Required Documents:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Valid Passport (photo page)</li>
                    <li>• Educational Certificates/Transcripts</li>
                    <li>• English Language Test Results (IELTS/TOEFL)</li>
                    <li>• Statement of Purpose</li>
                    <li>• CV/Resume</li>
                    <li>• Financial Documents</li>
                    <li>• Passport Photographs</li>
                </ul>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-4">
                <div>
                    <Label htmlFor="documents">Upload Documents *</Label>
                    <div className="mt-2">
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="file-upload"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        PDF, DOC, DOCX, JPG, PNG (MAX. 10MB each)
                                    </p>
                                </div>
                                <input
                                    id="file-upload"
                                    type="file"
                                    multiple
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                    disabled={uploading || isSubmitting}
                                />
                            </label>
                        </div>
                    </div>

                    {uploading && (
                        <div className="flex items-center mt-2 text-sm text-blue-600">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                            Uploading files...
                        </div>
                    )}

                    {uploadError && (
                        <div className="flex items-center mt-2 text-sm text-red-600 bg-red-50 p-2 rounded">
                            <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                            {uploadError}
                        </div>
                    )}

                    {errors.documents && (
                        <p className="text-sm text-red-500 mt-1">{errors.documents.message}</p>
                    )}
                </div>

                {watchedDocuments.length > 0 && (
                    <div className="space-y-2">
                        <Label>Uploaded Documents ({watchedDocuments.length})</Label>
                        <div className="space-y-2">
                            {watchedDocuments.map((doc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                                >
                                    <div className="flex items-center space-x-3">
                                        <File size={16} className="text-gray-500" />
                                        <div>
                                            <p className="text-sm font-medium">{doc.name}</p>
                                            <p className="text-xs text-gray-500">{formatFileSize(doc.size)}</p>
                                            <a
                                                href={doc.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-blue-600 hover:underline"
                                            >
                                                View Document
                                            </a>
                                        </div>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => removeDocument(index)}
                                        className="text-red-600 hover:text-red-700"
                                        disabled={isSubmitting}
                                    >
                                        <X size={16} />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-between pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onBack}
                        disabled={isSubmitting}
                    >
                        Back
                    </Button>
                    <Button
                        type="submit"
                        className="px-8"
                        disabled={uploading || watchedDocuments.length === 0 || isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                </div>
            </form>
        </div>
    )
}