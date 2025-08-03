import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 hero-gradient min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-heading font-space mb-6 slide-up" >
                        Ace Your <span className="text-primary">Tech Interview</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-default  max-w-3xl mx-auto mb-10 slide-up" >
                        Practice quizzes tailored to your stack & experience level. Get interview-ready in weeks, not months.
                    </p>
                    <div className="slide-up" >
                        <Link href={"/quiz"} className="btn-primary px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg">
                            Start Practicing Now
                            <i data-lucide="arrow-right" className="w-5 h-5 ml-2 inline"></i>
                        </Link>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto text-text-default">
                    <div className="tech-badge bg-surface p-4 rounded-xl border border-custom flex flex-col items-center">
                        <i data-lucide="react" className="w-10 h-10 text-[#61DAFB]"></i>
                        <span className="mt-2 text-sm">React</span>
                    </div>
                    <div className="tech-badge bg-surface p-4 rounded-xl border border-custom flex flex-col items-center">
                        <i data-lucide="nodejs" className="w-10 h-10 text-[#68A063]"></i>
                        <span className="mt-2 text-sm">Node.js</span>
                    </div>
                    <div className="tech-badge bg-surface p-4 rounded-xl border border-custom flex flex-col items-center">
                        <i data-lucide="database" className="w-10 h-10 text-[#589636]"></i>
                        <span className="mt-2 text-sm">MongoDB</span>
                    </div>
                    <div className="tech-badge bg-surface p-4 rounded-xl border border-custom flex flex-col items-center">
                        <i data-lucide="python" className="w-10 h-10 text-[#3776AB]"></i>
                        <span className="mt-2 text-sm">Python</span>
                    </div>
                    <div className="tech-badge bg-surface p-4 rounded-xl border border-custom flex flex-col items-center">
                        <i data-lucide="java" className="w-10 h-10 text-[#007396]"></i>
                        <span className="mt-2 text-sm">Java</span>
                    </div>
                    <div className="tech-badge bg-surface p-4 rounded-xl border border-custom flex flex-col items-center">
                        <i data-lucide="aws" className="w-10 h-10 text-[#FF9900]"></i>
                        <span className="mt-2 text-sm">AWS</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection