'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Dashboard', icon: 'fa-gauge', link: "/user-dashboard" },
        { name: 'Quiz', icon: 'fa-question-circle', link: "/quiz" },
    ];

    const handleLogout = () => {
        Cookies.remove("token")
        router.push("/auth")
    }

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}
            style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold text-text-heading  font-space">TechInterview<span className="text-primary">Ace</span></span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.link}
                                    className="nav-link px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                    style={{
                                        color: 'var(--color-text-default)',
                                        backgroundColor: pathname == link.link ? 'var(--color-primary)' : 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (index !== 0) {
                                            e.target.style.color = 'var(--color-primary-hover)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (index !== 0) {
                                            e.target.style.color = 'var(--color-text-default)';
                                        }
                                    }}
                                >
                                    <i className={`fas ${link.icon} mr-2`}></i>
                                    {link.name}
                                </Link>
                            ))}

                            <button
                                className="ml-4 px-4 py-2 cursor-pointer rounded-md text-sm font-medium flex items-center transition-colors duration-300"
                                onClick={()=>handleLogout()}
                                style={{
                                    color: 'var(--color-text-default)',
                                    backgroundColor: 'var(--color-error)',
                                    border: '1px solid var(--color-border)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#E11D48';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'var(--color-error)';
                                }}
                            >
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                            style={{
                                color: 'var(--color-text-default)',
                                backgroundColor: 'transparent'
                            }}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMobileMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden mobile-menu overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium flex items-center"
                            style={{
                                color: 'var(--color-text-default)',
                                backgroundColor: index === 0 ? 'var(--color-primary)' : 'transparent',
                                margin: '0.25rem 0'
                            }}
                        >
                            <i className={`fas ${link.icon} mr-3`}></i>
                            {link.name}
                        </a>
                    ))}

                    <button
                        className="w-full mt-2 px-4 py-2 rounded-md text-base font-medium flex items-center justify-center"
                        style={{
                            color: 'var(--color-text-default)',
                            backgroundColor: 'var(--color-error)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        <i className="fas fa-sign-out-alt mr-3"></i>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar