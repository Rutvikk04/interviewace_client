import React from 'react'

const Footer = () => {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-surface border-t border-custom">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-heading font-space mb-4">TechInterview<span className="text-primary">Ace</span></h3>
                        <p className="text-muted">
                            The ultimate platform for technical interview preparation.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-muted hover:text-primary transition-colors">
                                <i data-lucide="twitter" className="w-5 h-5"></i>
                            </a>
                            <a href="#" className="text-muted hover:text-primary transition-colors">
                                <i data-lucide="github" className="w-5 h-5"></i>
                            </a>
                            <a href="#" className="text-muted hover:text-primary transition-colors">
                                <i data-lucide="linkedin" className="w-5 h-5"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-heading font-medium mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Roadmap</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-heading font-medium mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Guides</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Interview Tips</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-heading font-medium mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">About</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Privacy</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-custom mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted text-sm">
                        © 2023 TechInterviewAce. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-muted hover:text-primary text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-muted hover:text-primary text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-muted hover:text-primary text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer