import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { passportSchema, PassportDetails } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'

interface PassportStepProps {
    data: PassportDetails
    onNext: (data: PassportDetails) => void
    onBack: () => void
}

export default function PassportStep({ data, onNext, onBack }: PassportStepProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<PassportDetails>({
        resolver: zodResolver(passportSchema),
        defaultValues: data,
    })

    const watchedValues = watch()

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Passport Details</h2>
                <p className="text-gray-600">Please provide your passport and personal information</p>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-4">
                <div>
                    <Label htmlFor="date_of_birth">Date of Birth (MM/DD/YYYY) *</Label>
                    <Input
                        {...register('date_of_birth')}
                        type="date"
                        className={errors.date_of_birth ? 'border-red-500' : ''}
                    />
                    {errors.date_of_birth && (
                        <p className="text-sm text-red-500 mt-1">{errors.date_of_birth.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="passport_number">Passport Number *</Label>
                    <Input
                        {...register('passport_number')}
                        placeholder="A12345678"
                        className={errors.passport_number ? 'border-red-500' : ''}
                    />
                    {errors.passport_number && (
                        <p className="text-sm text-red-500 mt-1">{errors.passport_number.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="passport_issuance_date">Passport Issuance Date *</Label>
                        <Input
                            {...register('passport_issuance_date')}
                            type="date"
                            className={errors.passport_issuance_date ? 'border-red-500' : ''}
                        />
                        {errors.passport_issuance_date && (
                            <p className="text-sm text-red-500 mt-1">{errors.passport_issuance_date.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="passport_expiry_date">Passport Expiry Date *</Label>
                        <Input
                            {...register('passport_expiry_date')}
                            type="date"
                            className={errors.passport_expiry_date ? 'border-red-500' : ''}
                        />
                        {errors.passport_expiry_date && (
                            <p className="text-sm text-red-500 mt-1">{errors.passport_expiry_date.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select
                            value={watchedValues.gender}
                            onValueChange={(value) => setValue('gender', value as 'male' | 'female' | 'other')}
                        >
                            <SelectTrigger className={errors.gender ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.gender && (
                            <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="marital_status">Marital Status *</Label>
                        <Input
                            {...register('marital_status')}
                            placeholder="Single, Married, etc."
                            className={errors.marital_status ? 'border-red-500' : ''}
                        />
                        {errors.marital_status && (
                            <p className="text-sm text-red-500 mt-1">{errors.marital_status.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Input
                        {...register('nationality')}
                        placeholder="American, British, etc."
                        className={errors.nationality ? 'border-red-500' : ''}
                    />
                    {errors.nationality && (
                        <p className="text-sm text-red-500 mt-1">{errors.nationality.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="destination_country">Destination Country *</Label>
                    <Select
                        value={watchedValues.destination_country}
                        onValueChange={(value) => setValue('destination_country', value as 'UK' | 'Canada')}
                    >
                        <SelectTrigger className={errors.destination_country ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Select destination country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="UK">United Kingdom</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.destination_country && (
                        <p className="text-sm text-red-500 mt-1">{errors.destination_country.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="proposed_course">Proposed Course of Study *</Label>
                    <Input
                        {...register('proposed_course')}
                        placeholder="Computer Science, Business Administration, etc."
                        className={errors.proposed_course ? 'border-red-500' : ''}
                    />
                    {errors.proposed_course && (
                        <p className="text-sm text-red-500 mt-1">{errors.proposed_course.message}</p>
                    )}
                </div>

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