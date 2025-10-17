import { Check } from 'lucide-react'

interface FormProgressProps {
    currentStep: number
    totalSteps: number
    stepTitles: string[]
}

export default function FormProgress({ currentStep, totalSteps, stepTitles }: FormProgressProps) {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between">
                {stepTitles.map((title, index) => {
                    const stepNumber = index + 1
                    const isCompleted = stepNumber < currentStep
                    const isCurrent = stepNumber === currentStep

                    return (
                        <div key={stepNumber} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${isCompleted
                                            ? 'bg-green-500 text-white'
                                            : isCurrent
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 text-gray-600'
                                        }`}
                                >
                                    {isCompleted ? <Check size={16} /> : stepNumber}
                                </div>
                                <span className="text-xs mt-2 text-center max-w-20 leading-tight">
                                    {title}
                                </span>
                            </div>
                            {stepNumber < totalSteps && (
                                <div
                                    className={`h-1 w-12 mx-2 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'
                                        }`}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="mt-4">
                <div className="text-sm text-gray-600">
                    Step {currentStep} of {totalSteps}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    )
}