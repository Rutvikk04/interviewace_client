import React from 'react'
const Nav = () => {
    return (
        <nav className="fixed w-full z-50  bg-surface/80 nav-blur border-b border-cus">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold text-text-heading  font-space">TechInterview<span className="text-primary">Ace</span></span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-heading hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#features" className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                            <a href="#progress" className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Progress</a>
                            <a href="#testimonials" className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
                            <a href="/auth" className="ml-4 btn-primary px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">Login</a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className="text-muted hover:text-primary focus:outline-none">
                            <i data-lucide="menu" className="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav