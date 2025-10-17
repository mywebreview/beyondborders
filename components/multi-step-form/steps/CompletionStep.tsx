import { Button } from '../../ui/button'
import { CheckCircle } from 'lucide-react'

interface CompletionStepProps {
    firstName: string
    destinationCountry: string // Add this prop
    onBack: () => void
    onStartNew: () => void
}

export default function CompletionStep({ firstName, onBack, onStartNew }: CompletionStepProps) {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
                <p className="text-gray-600">
                    That'll be all for now, {firstName}. Thank you!
                </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-green-800 space-y-2">
                    <li>• You will receive a confirmation email shortly</li>
                    <li>• Our team will review your application within 2-3 business days</li>
                    <li>• We will contact you with the next steps in your study abroad journey</li>
                    <li>• Keep an eye on your email for important updates</li>
                </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                    <strong>Application Reference:</strong> Your application has been saved and you will receive
                    a reference number via email. Please keep this for your records.
                </p>
            </div>

            <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={onBack}>
                    Back to Review
                </Button>
                <Button onClick={onStartNew} className="px-8">
                    Submit Another Application
                </Button>
            </div>
        </div>
    )
}