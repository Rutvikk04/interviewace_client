import React from 'react'

const Features = () => {
  return (
   <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-heading font-space" data-aos="fade-up">
                    Features Designed for <span className="text-primary">Your Success</span>
                </h2>
                <p className="text-muted max-w-2xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">
                    Everything you need to prepare effectively for technical interviews at top tech companies.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-background p-8 rounded-2xl border border-custom glow-on-hover transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                        <i data-lucide="list-checks" className="w-6 h-6 text-primary"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-heading mb-3">Real Interview Questions</h3>
                    <p className="text-muted">
                        Curated questions from actual interviews at FAANG companies and startups.
                    </p>
                </div>
                
                <div className="bg-background p-8 rounded-2xl border border-custom glow-on-hover transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                        <i data-lucide="filter" className="w-6 h-6 text-primary"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-heading mb-3">Experience-Based Filtering</h3>
                    <p className="text-muted">
                        Get questions matched to your level - from junior to senior positions.
                    </p>
                </div>
                
                <div className="bg-background p-8 rounded-2xl border border-custom glow-on-hover transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                        <i data-lucide="trending-up" className="w-6 h-6 text-primary"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-heading mb-3">Progress Tracking</h3>
                    <p className="text-muted">
                        Visualize your improvement with detailed analytics and performance metrics.
                    </p>
                </div>
                
                <div className="bg-background p-8 rounded-2xl border border-custom glow-on-hover transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                        <i data-lucide="shield-check" className="w-6 h-6 text-primary"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-heading mb-3">Secure & Clean Code</h3>
                    <p className="text-muted">
                        All solutions are peer-reviewed and follow best practices.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features