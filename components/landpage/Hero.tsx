import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-blue-500/[0.02] bg-[size:60px_60px]" />

            {/* Animated gradient overlay for subtle color */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-background to-indigo-50/50 animate-gradient-x" />

            {/* Animated floating elements */}
            <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-primary/40 animate-float-slow shadow-lg"></div>
            <div className="absolute top-1/3 right-20 w-4 h-4 rounded-full bg-blue-400/30 animate-float-medium shadow-lg"></div>
            <div className="absolute bottom-1/4 left-20 w-8 h-8 rounded-full bg-primary/30 animate-float-fast shadow-lg"></div>
            <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-indigo-300/40 animate-float-slow delay-1000 shadow-lg"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left space-y-8">
                    <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200 shadow-sm animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-foreground text-sm font-medium">Trusted by 5,000+ Nigerian Students</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
                        Your Gateway to
                        <span className="block text-primary mt-2 animate-color-pulse">World-Class Education</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-slide-up delay-100">
                        Study in the UK or Canada with expert guidance, personalized support, and guaranteed admission success.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 animate-slide-up delay-200">
                        <div className="text-center transform hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl font-bold text-primary animate-count-up">98%</div>
                            <div className="text-muted-foreground text-sm">Visa Success Rate</div>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl font-bold text-primary animate-count-up delay-300">500+</div>
                            <div className="text-muted-foreground text-sm">Partner Universities</div>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl font-bold text-primary animate-count-up delay-500">15+</div>
                            <div className="text-muted-foreground text-sm">Years Experience</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8 animate-slide-up delay-300">
                        <Link
                            href="/contact"
                            className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <span className="relative z-10">Get Started Today</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <Link
                            href="/programs"
                            className="group relative bg-transparent text-foreground px-8 py-4 rounded-xl text-lg font-bold border-2 border-border hover:border-primary transition-all duration-300 hover:bg-accent/10 backdrop-blur-sm transform hover:-translate-y-1"
                        >
                            <span className="relative z-10">Learn More</span>
                            <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-muted-foreground text-sm animate-fade-in delay-500">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-yellow-400 border-2 border-background shadow-sm animate-bounce"
                                        style={{ animationDelay: `${i * 200}ms` }}
                                    ></div>
                                ))}
                            </div>
                            <span>Join 5,000+ Successful Students</span>
                        </div>
                    </div>
                </div>

                {/* Illustration Section */}
                <div className="relative animate-float-slow">
                    <div className="relative z-10 bg-gradient-to-br from-card to-background backdrop-blur-sm rounded-2xl p-8 border border-border shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        {/* Main illustration container */}
                        <Image
                            src="/illustration.png"
                            alt="Study Abroad Illustration"
                            width={1000}
                            height={1000}
                            priority
                            className="transform hover:scale-110 transition-transform duration-700"
                        />

                        {/* Country flags */}
                        <div className="flex justify-center gap-6 mt-6">
                            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border transform hover:scale-110 transition-transform duration-300">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAAolBMVEXIEC7///8BIWnICyz++/vIGjEAAF3MzdjEAA/MO0r35ucAAFcAAGGvr8H09PbvzM7EAADHACcAGmbGACAAFmXFABYAC2IAEmTh4+rEAAfEx9X88vRlbJTy09bdhY3SU2HqtrvPRVT13N4+SH1vdprX2eJZYo2Nkq3MMEPVYm4pN3TorrSEiaffjZW2usvLJTs0QHkAAEgAAE7jn6XswMTYbngORZsVAAAGJklEQVR4nO3da1fbOBAGYDkJqUlYsIGwDRQa0tKSZVn2kv7/v7auIY51ndFoJIcezSdOw3GS57wzdrEti826sNfDp/nliK1Ofttt93gszFXO3n7jdM73vufTP/7avfPtppbfcbwQT6KuPrsYPjIyDIPQEFx3BPdVrRAcrYqi+SEZwxAICIIWAcEwZWFIj4AieENIlIbUCACBWO1e7P4xAUNaBGkc6gQvq/2X670QvSlSIvQJzu6XLgIJIXoa0iHIBNZZ0CHIH6dhuI2WhlQI/VmgE5QvK/VriaOFxhArDWkQ3ARaClqE4knoDHHSkALhfPq3qxH0FLwiFMkY4iPIKQDGoYxAYaA0RWwEoBFsBDuEhsEwG7jTEBehaQS/cdhDeNj99DSOzRATgdgIr+8l5t8+dgyR0xAPwZ0CgOD7VIwu59/2adAYlowMsRBkAjUF5SNAcDUSzUbcDGAafh8WgTwOdwSjFkFheInVFDEQgHEIp2DUITQMU9dsAJsClQZ+BHcjQCk4uXrbjOg22E/Dyj8NCAZuBGAc4lIgI7RpcDRFeBp4EaBxuHUSnFz1NiWkDUtp8B2RXyEGTgRGAhUhcEQCDHwI59MvYTtFuVQEuSn02QA0hZOBCwEYh34pMCPEG5E8CCw7RRghVho4EMKODg0psCMEpsHCEI7gJKiBcfinhcCOEGNEhiJA49A9C4yNACHwN0UYQp9ge1/6jUN7CiAE7qYIQZBToIzDGtojOFIAI/CmgY4gE5TqLDgOSAEGgZOBiuCcBVAKYAIMgvJ/ike9Kc6QDDQEN0FwCrAIXGmgIERPAR5BYTCkAcPgjyDvETQCdwpsh0Z0BJWh1NIAN4UvgnOnyNMIvghwU0AMfghAI/AR+CFAaYBG5NwH4Z9+CtTjAigFwHFBGAI0G4A0fPBA6E6r6o3AmgIKAjwiXQx4hD1BlJ1iKELYiPRDSELQIEwpNf/3Sxft1eOylKqqjrcTBoTJ9qWq5E27CZqpMyd9HfGBWNfdaYriTKutmmoKwnqrbdd1NFJMrq+J30W4Nhut8DMhSWWEIiO0lRGKjNBWRigyQltiMkDZERazYoDPI46GKJuBGA/yccR4iLIZiEP7OLly5cqVK1euXLly5cqVK1euXLly5cqVKxe6Duxv3MN8nEHOdhzayZcBznod3mm4IU6AHtwJ2SHeNCP8rIxQZIS2MkKREdo6NASGy3oNtdav9O1f9k1FuNGv9D272b14Sr+sN/gCbxPBD+W67LJaPt/0foGchNkP7Zrvi27L9Au8Ay/1NxOo9/DW/8mXvQe0w+xucSFv/WLPQL3UfwCCwJkwuyuZGUJu/zERbBZ2AtrtP0YG3jTQbwQzEbhSQL8RzMjgTEPEG8H8UzDuEYTcEmioGz0NC2oaaDeHmgj0FMgEYTeHGopvNlBuE8YR1ApB6G3C3gzctwmDjQCmgIYAMhiagpAG1NIB8/AUUBFCmwI1Iv0WkTAR4FJAR0CkQWPwHJE+y4mYCOBxGI5AYfCaDfiFZUwEegrMjRCKEMoQsLAMpRF2L8ZdYsjIoB833CHTgFtsCktgT0E4AoJhSWwK67JjbOOQD4E0IjFpgBeg4yLgWoDOrykEhgFaihBH4BqHvAiUpugzIJci9E+BcI5DbgR5LT4jg++IdC1PiiPApYATwT8Nwp0GdaHaT66/n6432lqg2BTwIlBGZGlPg7xkMUDgeVwQE8GfwTEi+4tX+6ag9iKIsXg1U1OYljHHEfg0QhwExIjU0rBviom6jPnlHCAIbIRYCExpEBgCLQUUgniPNvBNw1JNgyDMgvFTR+DxdIc0D7nAMSh7CuGdAt9xGB8BwVC5GKbCfWikj0NiCuIihDXFqePUvCkFfYIDfgSSkcGeBivCeqM9NaI/Cw7zYVgAg7anqF4ZLAjsKUiBQG4KI4IhBeEEyR6Q59kUDYMBYf2ZvRHSIciPRMKlYaEhALPgfTw00zMNCkK0FKREQKRBGZEeBO/1Qbowg5OgZktBagQEQ68pkCl4pw/XdjFM9mlApeBXeMy6Kw0IAo4U/Kz0CDDDc8uQpBFeawgEkGHy3DTFrUogxvvnCD0wEgyFAM+G5/8B+NmDsOM+foAAAAAASUVORK5CYII=" className="w-8 bg-red-600 relative shadow-lg" alt="" />
                                <span className="text-foreground text-sm font-medium">UK</span>
                            </div>

                            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border transform hover:scale-110 transition-transform duration-300">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png" className="w-8 bg-red-600 relative shadow-lg" alt="" />
                                <span className="text-foreground text-sm font-medium">Canada</span>
                            </div>
                        </div>
                    </div>

                    {/* Background glow effects */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center animate-bounce">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    )
}