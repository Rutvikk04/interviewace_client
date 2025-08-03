import React from 'react'

const Testimonials = () => {
  return (
  <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-heading font-space" data-aos="fade-up">
                    Trusted by <span className="text-primary">Developers</span> Worldwide
                </h2>
                <p className="text-muted max-w-2xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">
                    Join thousands of developers who landed their dream jobs with our platform.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background p-8 rounded-2xl border border-custom" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <span className="text-heading font-medium">AS</span>
                        </div>
                        <div>
                            <h4 className="text-heading font-medium">Alex S.</h4>
                            <p className="text-muted text-sm">Senior Frontend Engineer</p>
                        </div>
                    </div>
                    <p className="text-muted">
                        "TechInterviewAce helped me prepare for my Google interview. The questions were spot-on and the explanations were thorough. Got the offer!"
                    </p>
                    <div className="mt-4 flex">
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                    </div>
                </div>
                
                <div className="bg-background p-8 rounded-2xl border border-custom" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <span className="text-heading font-medium">MJ</span>
                        </div>
                        <div>
                            <h4 className="text-heading font-medium">Maria J.</h4>
                            <p className="text-muted text-sm">Backend Developer</p>
                        </div>
                    </div>
                    <p className="text-muted">
                        "The progress tracking feature was invaluable. I could see exactly where I needed to improve. Landed a job at Amazon thanks to this platform."
                    </p>
                    <div className="mt-4 flex">
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                    </div>
                </div>
                
                <div className="bg-background p-8 rounded-2xl border border-custom" data-aos="fade-up" data-aos-delay="400">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <span className="text-heading font-medium">TK</span>
                        </div>
                        <div>
                            <h4 className="text-heading font-medium">Tom K.</h4>
                            <p className="text-muted text-sm">Full Stack Developer</p>
                        </div>
                    </div>
                    <p className="text-muted">
                        "As someone transitioning from bootcamp to professional developer, this was exactly what I needed to bridge the gap. Got multiple offers!"
                    </p>
                    <div className="mt-4 flex">
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                        <i data-lucide="star" className="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                    </div>
                </div>
            </div>
            
            <div className="mt-16 text-center" data-aos="fade-up">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-background border border-custom">
                    <i data-lucide="users" className="w-5 h-5 text-primary mr-2"></i>
                    <span className="text-muted">Trusted by <span className="text-heading font-medium">1,000+</span> developers at top companies</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials