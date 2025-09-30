'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import API from '@/utils/API'; // your axios instance

const QuizConfig = ({ onStart }) => {
    const [form, setForm] = useState({ techStack: '', experience: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.techStack || !form.experience) {
            toast.error('Please select both tech stack and experience.');
            return;
        }
        try {
            const res = await API.get(`/api/quiz/questions?tech=${form.techStack}&level=${form.experience}`);
            onStart({ tech: form.techStack, level: form.experience }, res.data.questions);
        } catch (err) {
            toast.error('Failed to load quiz');
            return
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="form-panel w-full max-w-md bg-[var(--color-surface)] rounded-xl shadow-lg overflow-hidden border border-[var(--color-border)]">
                <div className="p-8 text-text-default">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-code text-2xl"></i>
                        </div>
                        <h1 className="text-2xl font-bold mb-2">Select Your Track</h1>
                        <p className="text-[var(--color-text-text-muted)]">
                            Choose the tech and experience to get started.
                        </p>
                    </div>

                    <form id="quizForm" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="techStack" className="block text-sm font-medium mb-2">Tech Stack</label>
                            <select
                                id="techStack"
                                name="techStack"
                                value={form.techStack}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent appearance-none"
                                required
                            >
                                <option value="" disabled defaultChecked>Select your tech stack</option>
                                <option value="react">ReactJS</option>
                                <option value="nextjs">NextJS</option>
                                <option value="node">NodeJS</option>
                                <option value="mongodb">MongoDB</option>
                                <option value="mern">MERN Stack</option>
                                <option value="fullstack">Full Stack</option>
                                <option value="aws">AWS</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>

                            </select>
                        </div>

                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium mb-2">Experience Level</label>
                            <select
                                id="experience"
                                name="experience"
                                value={form.experience}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent appearance-none"
                                required
                            >
                                <option value="" disabled>Select your experience level</option>
                                <option value="1">0–1 Years</option>
                                <option value="2">2-3 Years</option>
                                <option value="3">3+ Years</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                id="startQuizBtn"
                                className="w-full py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                                disabled={loading}
                            >
                                {!loading ? (
                                    <span className="btn-text">Start Quiz</span>
                                ) : (
                                    <>
                                        <span className="btn-text">Loading</span>
                                        <i className="fas fa-spinner fa-spin ml-2" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuizConfig;
