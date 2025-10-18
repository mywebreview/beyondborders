import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { personalInfoSchema, PersonalInfo } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'

interface PersonalInfoStepProps {
    data: PersonalInfo
    onNext: (data: PersonalInfo) => void
}

export default function PersonalInfoStep({ data, onNext }: PersonalInfoStepProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PersonalInfo>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: data,
    })

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                <p className="text-gray-600">Let's start with your basic information</p>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="first_name">First Name *</Label>
                        <Input
                            {...register('first_name')}
                            placeholder="John"
                            className={errors.first_name ? 'border-red-500' : ''}
                        />
                        {errors.first_name && (
                            <p className="text-sm text-red-500 mt-1">{errors.first_name.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="last_name">Last Name *</Label>
                        <Input
                            {...register('last_name')}
                            placeholder="Doe"
                            className={errors.last_name ? 'border-red-500' : ''}
                        />
                        {errors.last_name && (
                            <p className="text-sm text-red-500 mt-1">{errors.last_name.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                        {...register('phone')}
                        type="tel"
                        placeholder="+234-080-1234-5678"
                        className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        {...register('email')}
                        type="email"
                        placeholder="john@example.com"
                        className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="flex justify-end pt-4">
                    <Button type="submit" className="px-8">
                        Next
                    </Button>
                </div>
            </form>
        </div>
    )
}