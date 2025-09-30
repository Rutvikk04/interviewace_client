'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify"
import API from '@/utils/API';
import Cookies from 'js-cookie'


const AuthPage = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: 'demo@demo.com',
        password: 'demo',
        confirmPassword: '',
    });
    const { name, email, password, confirmPassword } = form

    useEffect(() => {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        if (isLogin) {
            loginForm.classList.remove('opacity-0', 'translate-x-full');
            loginForm.classList.add('opacity-100', 'translate-x-0');
            registerForm.classList.remove('opacity-100', 'translate-x-0');
            registerForm.classList.add('opacity-0', 'translate-x-full');
        } else {
            registerForm.classList.remove('opacity-0', 'translate-x-full');
            registerForm.classList.add('opacity-100', 'translate-x-0');
            loginForm.classList.remove('opacity-100', 'translate-x-0');
            loginForm.classList.add('opacity-0', 'translate-x-full');
        }
    }, [isLogin]);

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            email: form.email,
            password: form.password,
        };

        if (!isLogin) {
            if (form.password !== form.confirmPassword) {
                toast.error('Password and confirm password must be equal');
                setLoading(false);
                return;
            }
            payload.name = form.name;
        }

        try {
            const res = await API.post(`/api/auth/${isLogin ? 'login' : 'register'}`, payload);
            if (res.data?.token) {
                Cookies.set('token', res.data.token) // After successful login
                router.push('/user-dashboard');
            } else {
                setIsLogin(true)
            }
            toast.success(`${isLogin ? 'Logged in' : 'Registered'} successfully`);
        } catch (err) {
            toast.error(err.response?.data?.msg || err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-background min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md animate-fade-in">
                <div className="bg-surface rounded-xl shadow-xl border border-border overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-border">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-4 px-6 text-center font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary transition-colors ${isLogin
                                ? 'text-text-heading after:opacity-100'
                                : 'text-muted after:opacity-0'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-4 px-6 text-center font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary transition-colors ${!isLogin
                                ? 'text-text-heading after:opacity-100'
                                : 'text-muted after:opacity-0'
                                }`}
                        >
                            Register
                        </button>
                    </div>

                    {/* Forms */}
                    <div className="relative overflow-hidden">
                        {/* Login Form */}
                        <form id="login-form" onSubmit={handleSubmit} className={`p-6 transition-all duration-300 ${!isLogin ? 'hidden' : ''}`}>
                            <h2 className="text-2xl font-bold text-text-heading mb-6">Welcome back</h2>

                            <div className="input-container">
                                <input type="email" id="email" name='email' value={email} className="input-field" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="email" className="input-label">Email</label>
                            </div>

                            <div className="input-container">
                                <input type="password" id="password" name='password' value={password} className="input-field" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="password" className="input-label">Password</label>
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember-me" className="rounded border-border text-primary focus:ring-primary" />
                                    <label htmlFor="remember-me" className="ml-2 text-sm text-muted">Remember me</label>
                                </div>
                                {/* <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a> */}
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full py-3 px-2 rounded-md"
                                disabled={loading}
                            >
                                {!loading ? (
                                    <span id="login-text">Login</span>
                                ) : (
                                    <>
                                        <span id="login-text">Login</span>
                                        <span className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    </>
                                )}
                            </button>

                            <div className="mt-4 text-center text-sm text-muted">
                                Don&apos;t have an account?{' '}
                                <button type="button" onClick={() => setIsLogin(false)} className="text-primary hover:underline focus:outline-none">
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* Register Form */}
                        <form onSubmit={handleSubmit} id="register-form" className={`p-6 transition-all duration-300 ${isLogin ? 'hidden' : ''}`}
                        >

                            <h2 className="text-2xl font-bold text-text-heading mb-6">Create an account</h2>

                            <div className="input-container">
                                <input type="text" id="name" name='name' value={name} className="input-field" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="name" className="input-label">Full Name</label>
                            </div>

                            <div className="input-container">
                                <input type="email" id="email" name='email' value={email} className="input-field" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="email" className="input-label">Email</label>
                            </div>

                            <div className="input-container">
                                <input type="password" id="password" name='password' value={password} className="input-field" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="password" className="input-label">Password</label>
                            </div>

                            <div className="input-container">
                                <input type="password" id="confirmPassword" name='confirmPassword' value={confirmPassword} className="input-field" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                            </div>

                            <div className="flex items-center mb-6">
                                <input type="checkbox" id="terms" className="rounded border-border text-primary focus:ring-primary" required />
                                <label htmlFor="terms" className="ml-2 text-sm text-muted">
                                    I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center h-11 mt-6"
                                disabled={loading}
                            >
                                {!loading ? (
                                    <span id="register-text">Register</span>
                                ) : (
                                    <>
                                        <span id="register-text">Register</span>
                                        <span className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    </>
                                )}
                            </button>

                            <div className="mt-4 text-center text-sm text-muted">
                                Already have an account?{' '}
                                <button type="button" onClick={() => setIsLogin(true)} className="text-primary hover:underline focus:outline-none">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
