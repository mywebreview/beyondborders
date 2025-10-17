import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { educationSchema, Education } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { Plus, Trash2 } from 'lucide-react'

interface EducationStepProps {
    data: Education
    onNext: (data: Education) => void
    onBack: () => void
}

export default function EducationStep({ data, onNext, onBack }: EducationStepProps) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<Education>({
        resolver: zodResolver(educationSchema),
        defaultValues: data.education?.length > 0 ? data : {
            education: [{
                school_name: '',
                course_of_study: '',
                certification: '',
                duration_start: '',
                duration_end: '',
            }]
        },
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education',
    })

    const addEducation = () => {
        append({
            school_name: '',
            course_of_study: '',
            certification: '',
            duration_start: '',
            duration_end: '',
        })
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Education History</h2>
                <p className="text-gray-600">Please provide details about your educational background</p>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-6">
                {fields.map((field, index) => (
                    <div key={field.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Education {index + 1}</h3>
                            {fields.length > 1 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => remove(index)}
                                    className="text-red-600 hover:text-red-700"
                                >
                                    <Trash2 size={16} />
                                </Button>
                            )}
                        </div>

                        <div>
                            <Label htmlFor={`education.${index}.school_name`}>Name of School *</Label>
                            <Input
                                {...register(`education.${index}.school_name`)}
                                placeholder="University of Example"
                                className={errors.education?.[index]?.school_name ? 'border-red-500' : ''}
                            />
                            {errors.education?.[index]?.school_name && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.education[index]?.school_name?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor={`education.${index}.course_of_study`}>Course of Study *</Label>
                            <Input
                                {...register(`education.${index}.course_of_study`)}
                                placeholder="Computer Science"
                                className={errors.education?.[index]?.course_of_study ? 'border-red-500' : ''}
                            />
                            {errors.education?.[index]?.course_of_study && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.education[index]?.course_of_study?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor={`education.${index}.certification`}>Certification *</Label>
                            <Input
                                {...register(`education.${index}.certification`)}
                                placeholder="e.g., SSCE, BSc, MSc, PhD"
                                className={errors.education?.[index]?.certification ? 'border-red-500' : ''}
                            />
                            {errors.education?.[index]?.certification && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.education[index]?.certification?.message}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor={`education.${index}.duration_start`}>Start Date (MM/YYYY) *</Label>
                                <Input
                                    {...register(`education.${index}.duration_start`)}
                                    type="month"
                                    className={errors.education?.[index]?.duration_start ? 'border-red-500' : ''}
                                />
                                {errors.education?.[index]?.duration_start && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.education[index]?.duration_start?.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor={`education.${index}.duration_end`}>End Date (MM/YYYY) *</Label>
                                <Input
                                    {...register(`education.${index}.duration_end`)}
                                    type="month"
                                    className={errors.education?.[index]?.duration_end ? 'border-red-500' : ''}
                                />
                                {errors.education?.[index]?.duration_end && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.education[index]?.duration_end?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                <Button
                    type="button"
                    variant="outline"
                    onClick={addEducation}
                    className="w-full"
                >
                    <Plus size={16} className="mr-2" />
                    Add Another Education
                </Button>

                <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={onBack}>
                        Back
                    </Button>
                    <Button type="submit" className="px-8">
                        Next
                    </Button>
                </div>
            </form>
        </div>
    )
}