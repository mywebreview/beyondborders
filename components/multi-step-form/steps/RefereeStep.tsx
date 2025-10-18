import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { refereeSchema, Referee } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'

interface RefereeStepProps {
    data: Referee
    onNext: (data: Referee) => void
    onBack: () => void
}

export default function RefereeStep({ data, onNext, onBack }: RefereeStepProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Referee>({
        resolver: zodResolver(refereeSchema),
        defaultValues: data,
    })

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Referee Details</h2>
                <p className="text-gray-600">Please provide information about your referee</p>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="referee_first_name">First Name *</Label>
                        <Input
                            {...register('referee_first_name')}
                            placeholder="John"
                            className={errors.referee_first_name ? 'border-red-500' : ''}
                        />
                        {errors.referee_first_name && (
                            <p className="text-sm text-red-500 mt-1">{errors.referee_first_name.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="referee_last_name">Last Name *</Label>
                        <Input
                            {...register('referee_last_name')}
                            placeholder="Smith"
                            className={errors.referee_last_name ? 'border-red-500' : ''}
                        />
                        {errors.referee_last_name && (
                            <p className="text-sm text-red-500 mt-1">{errors.referee_last_name.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="referee_phone">Phone Number *</Label>
                    <Input
                        {...register('referee_phone')}
                        type="tel"
                        placeholder="+234-080-1234-5678"
                        className={errors.referee_phone ? 'border-red-500' : ''}
                    />
                    {errors.referee_phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.referee_phone.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="referee_email">Email Address *</Label>
                    <Input
                        {...register('referee_email')}
                        type="email"
                        placeholder="john.smith@company.com"
                        className={errors.referee_email ? 'border-red-500' : ''}
                    />
                    {errors.referee_email && (
                        <p className="text-sm text-red-500 mt-1">{errors.referee_email.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="referee_company">Company *</Label>
                    <Input
                        {...register('referee_company')}
                        placeholder="ABC Corporation"
                        className={errors.referee_company ? 'border-red-500' : ''}
                    />
                    {errors.referee_company && (
                        <p className="text-sm text-red-500 mt-1">{errors.referee_company.message}</p>
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