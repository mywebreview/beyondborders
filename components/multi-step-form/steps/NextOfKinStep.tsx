import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { nextOfKinSchema, NextOfKin } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'

interface NextOfKinStepProps {
  data: NextOfKin
  onNext: (data: NextOfKin) => void
  onBack: () => void
}

export default function NextOfKinStep({ data, onNext, onBack }: NextOfKinStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NextOfKin>({
    resolver: zodResolver(nextOfKinSchema),
    defaultValues: data,
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Next of Kin</h2>
        <p className="text-gray-600">Please provide information about your next of kin</p>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="kin_first_name">First Name *</Label>
            <Input
              {...register('kin_first_name')}
              placeholder="Jane"
              className={errors.kin_first_name ? 'border-red-500' : ''}
            />
            {errors.kin_first_name && (
              <p className="text-sm text-red-500 mt-1">{errors.kin_first_name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="kin_last_name">Last Name *</Label>
            <Input
              {...register('kin_last_name')}
              placeholder="Doe"
              className={errors.kin_last_name ? 'border-red-500' : ''}
            />
            {errors.kin_last_name && (
              <p className="text-sm text-red-500 mt-1">{errors.kin_last_name.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="kin_phone">Phone Number *</Label>
          <Input
            {...register('kin_phone')}
            type="tel"
            placeholder="+234-080-1234-5678"
            className={errors.kin_phone ? 'border-red-500' : ''}
          />
          {errors.kin_phone && (
            <p className="text-sm text-red-500 mt-1">{errors.kin_phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="kin_email">Email Address *</Label>
          <Input
            {...register('kin_email')}
            type="email"
            placeholder="jane.doe@example.com"
            className={errors.kin_email ? 'border-red-500' : ''}
          />
          {errors.kin_email && (
            <p className="text-sm text-red-500 mt-1">{errors.kin_email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="kin_relationship">Relationship *</Label>
          <Input
            {...register('kin_relationship')}
            placeholder="Mother, Father, Spouse, Sibling, etc."
            className={errors.kin_relationship ? 'border-red-500' : ''}
          />
          {errors.kin_relationship && (
            <p className="text-sm text-red-500 mt-1">{errors.kin_relationship.message}</p>
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