import React from 'react'

const ProgressReview = () => {
    return (
        <section id="progress" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold text-heading font-space mb-6">
                            Track Your <span className="text-primary">Progress</span> Over Time
                        </h2>
                        <p className="text-muted mb-8">
                            Our detailed analytics dashboard helps you identify strengths and weaknesses, so you can focus your practice where it matters most.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                </div>
                                <p className="ml-3 text-muted">Weekly performance reports</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                </div>
                                <p className="ml-3 text-muted">Time spent per topic</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                </div>
                                <p className="ml-3 text-muted">Accuracy improvement tracking</p>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-surface p-8 rounded-2xl border border-custom" data-aos="fade-left">
                        <div className="bg-background rounded-xl p-6">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <p className="text-muted text-sm">Performance</p>
                                    <h4 className="text-heading font-medium">Last 30 Days</h4>
                                </div>
                                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                                    +12.5%
                                </div>
                            </div>

                            {/* Chart placeholder */}
                            <div className="h-64 relative">
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-custom"></div>
                                <div className="absolute bottom-0 left-0 w-1/5 h-3/5 bg-primary/30 rounded-t-sm"></div>
                                <div className="absolute bottom-0 left-1/5 w-1/5 h-4/5 bg-primary/50 rounded-t-sm"></div>
                                <div className="absolute bottom-0 left-2/5 w-1/5 h-full bg-primary rounded-t-sm"></div>
                                <div className="absolute bottom-0 left-3/5 w-1/5 h-2/3 bg-primary/70 rounded-t-sm"></div>
                                <div className="absolute bottom-0 left-4/5 w-1/5 h-1/2 bg-primary/40 rounded-t-sm"></div>

                                <div className="absolute top-0 left-0 right-0 flex justify-between text-xs text-muted">
                                    <span>Week 1</span>
                                    <span>Week 2</span>
                                    <span>Week 3</span>
                                    <span>Week 4</span>
                                    <span>Current</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgressReview