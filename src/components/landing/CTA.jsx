import React from 'react'

const CTA = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 cta-gradient">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-heading font-space mb-6" data-aos="fade-up">
                    Ready to <span className="text-primary">Boost</span> Your Chances?
                </h2>
                <p className="text-xl text-muted mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Join thousands of developers who transformed their interview performance with our platform.
                </p>
                <div data-aos="fade-up" data-aos-delay="200">
                    <button className="btn-primary px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg">
                        Try the Quiz Now
                        <i data-lucide="arrow-right" className="w-5 h-5 ml-2 inline"></i>
                    </button>
                    <p className="text-sm text-muted mt-4">No credit card required. 7-day free trial.</p>
                </div>
            </div>
        </section>
    )
}

export default CTA