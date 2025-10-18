// components/multi-step-form/steps/AddressStep.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addressSchema, Address } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface AddressStepProps {
    data: Address
    onNext: (data: Address) => void
    onBack: () => void
}

export default function AddressStep({ data, onNext, onBack }: AddressStepProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Address>({
        resolver: zodResolver(addressSchema),
        defaultValues: data,
    })

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Address Information</h2>
                <p className="text-gray-600">Please provide your current address</p>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-4">
                <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                        {...register('address')}
                        placeholder="123 Main Street"
                        className={errors.address ? 'border-red-500' : ''}
                    />
                    {errors.address && (
                        <p className="text-sm text-red-500 mt-1">{errors.address.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="address_line_2">Address Line 2 (Optional)</Label>
                    <Input
                        {...register('address_line_2')}
                        placeholder="Apartment, Suite, Unit, etc."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                            {...register('city')}
                            placeholder="Lagos"
                            className={errors.city ? 'border-red-500' : ''}
                        />
                        {errors.city && (
                            <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="state">State/Region/Province *</Label>
                        <Input
                            {...register('state')}
                            placeholder="Lagos"
                            className={errors.state ? 'border-red-500' : ''}
                        />
                        {errors.state && (
                            <p className="text-sm text-red-500 mt-1">{errors.state.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="zip_code">Zip/Postal Code *</Label>
                        <Input
                            {...register('zip_code')}
                            placeholder="10001"
                            className={errors.zip_code ? 'border-red-500' : ''}
                        />
                        {errors.zip_code && (
                            <p className="text-sm text-red-500 mt-1">{errors.zip_code.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="country">Country *</Label>
                        <Input
                            {...register('country')}
                            placeholder="Nigeria"
                            className={errors.country ? 'border-red-500' : ''}
                        />
                        {errors.country && (
                            <p className="text-sm text-red-500 mt-1">{errors.country.message}</p>
                        )}
                    </div>
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