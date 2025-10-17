import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { travelHistorySchema, TravelHistory } from '@/lib/schemas'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { Textarea } from '../../ui/textarea'
import { Checkbox } from '../../ui/checkbox'

interface TravelHistoryStepProps {
    data: TravelHistory
    onNext: (data: TravelHistory) => void
    onBack: () => void
}

export default function TravelHistoryStep({ data, onNext, onBack }: TravelHistoryStepProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<TravelHistory>({
        resolver: zodResolver(travelHistorySchema),
        defaultValues: data,
    })

    const watchedValues = watch()
    const visaRefused = watchedValues.visa_refused

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Travel History</h2>
                <p className="text-gray-600">Tell us about your previous travel experience</p>
            </div>

            <form onSubmit={handleSubmit(onNext)} className="space-y-4">
                <div>
                    <Label htmlFor="countries_visited">What countries have you been to (with years)? *</Label>
                    <Textarea
                        {...register('countries_visited')}
                        placeholder="e.g., United States (2019, 2021), France (2020), Germany (2022)"
                        rows={3}
                        className={errors.countries_visited ? 'border-red-500' : ''}
                    />
                    {errors.countries_visited && (
                        <p className="text-sm text-red-500 mt-1">{errors.countries_visited.message}</p>
                    )}
                </div>

                <div className="space-y-3">
                    <Label>Have you been refused visa entry before? *</Label>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="visa_refused"
                            checked={visaRefused}
                            onCheckedChange={(checked) => setValue('visa_refused', !!checked)}
                        />
                        <Label htmlFor="visa_refused" className="text-sm font-normal">
                            Yes, I have been refused visa entry before
                        </Label>
                    </div>
                </div>

                {visaRefused && (
                    <div>
                        <Label htmlFor="visa_refusal_reasons">If yes, please explain the reasons *</Label>
                        <Textarea
                            {...register('visa_refusal_reasons')}
                            placeholder="Please provide details about the visa refusal..."
                            rows={3}
                            className={errors.visa_refusal_reasons ? 'border-red-500' : ''}
                        />
                        {errors.visa_refusal_reasons && (
                            <p className="text-sm text-red-500 mt-1">{errors.visa_refusal_reasons.message}</p>
                        )}
                    </div>
                )}

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