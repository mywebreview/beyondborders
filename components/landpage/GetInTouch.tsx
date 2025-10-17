export default function GetInTouch() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-brand-blue to-blue-900 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                        <p className="text-blue-100 mb-6 text-lg">
                            Let us help you achieve your study abroad dreams with our comprehensive services
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/services"
                                className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
                            >
                                View All Services
                            </a>
                            <a
                                href="/free-consultation"
                                className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors duration-300"
                            >
                                Book Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}