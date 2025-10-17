import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { declarationSchema, Declaration } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Label } from '../../ui/label'
import { Checkbox } from '../../ui/checkbox'

interface DeclarationStepProps {
    data: Declaration
    onNext: (data: Declaration) => void
    onBack: () => void
}

export default function DeclarationStep({ data, onNext, onBack }: DeclarationStepProps) {
    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<Declaration>({
        resolver: zodResolver(declarationSchema),
        defaultValues: data,
    })

    const watchedValues = watch()

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Declaration</h2>
                <p className="text-gray-600">Please read and accept the declaration to proceed</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Declaration Statement</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    I hereby declare that the information furnished above is true and correct to the best of my knowledge and belief.
                    I understand that any false information or misrepresentation may result in the rejection of my application or
                    cancellation of any admission granted. I also understand that the submission of this application does not
                    guarantee admission to any institution or program.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    I consent to the collection, use, and disclosure of my personal information for the purposes of processing
                    my study abroad application and related services. I understand that my information may be shared with
                    educational institutions, government agencies, and other relevant parties as necessary for the application process.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                    I acknowledge that I have read and understood the terms and conditions of this application and agree to
                    comply with all requirements and regulations.
                </p>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-4">
                <div className="flex items-start space-x-3">
                    <Checkbox
                        id="declaration_accepted"
                        checked={watchedValues.declaration_accepted}
                        onCheckedChange={(checked) => setValue('declaration_accepted', !!checked)}
                        className={errors.declaration_accepted ? 'border-red-500' : ''}
                    />
                    <Label htmlFor="declaration_accepted" className="text-sm leading-relaxed">
                        I hereby declare that the information furnished above is true and correct to the best of my knowledge and belief.
                        I accept all terms and conditions stated above. *
                    </Label>
                </div>
                {errors.declaration_accepted && (
                    <p className="text-sm text-red-500 ml-7">{errors.declaration_accepted.message}</p>
                )}

                <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={onBack}>
                        Back
                    </Button>
                    <Button
                        type="submit"
                        className="px-8"
                        disabled={!watchedValues.declaration_accepted}
                    >
                        Next
                    </Button>
                </div>
            </form>
        </div>
    )
}