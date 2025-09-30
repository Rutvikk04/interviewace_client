import React from 'react'

const Footer = () => {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-surface border-t border-custom">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
                    <div>
                        <h3 className="text-xl font-bold text-heading font-space mb-4">Interview<span className="text-primary">Ace</span></h3>
                        <p className="text-muted">
                            The ultimate platform for technical interview preparation.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-heading font-medium mb-4">Quiz</h4>
                        <ul className="space-y-2">
                            <li><a href="/quiz" className="text-muted hover:text-primary transition-colors">Quiz</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-heading font-medium mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Dashboard</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-custom mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted text-sm">
                        © 2023  terviewAce. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer