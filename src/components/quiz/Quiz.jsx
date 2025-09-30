'use client';
import React, { useEffect, useState } from 'react';
import API from '@/utils/API';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const QuizPage = ({ config, questions, onComplete, setStep }) => {
    const router = useRouter()
    const [current, setCurrent] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [timeLeft, setTimeLeft] = useState(60); // seconds
    const [loading, setLoading] = useState(false);
    const q = questions[current];
    const isAnswered = selectedAnswers[current] !== undefined;


    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 1) {
                    handleNext(); // auto move
                    return 60;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [current]);

    const handleOptionSelect = (index) => {
        const updated = [...selectedAnswers];
        updated[current] = index;
        setSelectedAnswers(updated);
    };

    const handleNext = () => {
        if (current < questions.length - 1) {
            setCurrent(current + 1);
            setTimeLeft(60);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        try {
            const answers = questions.map((q, idx) => ({
                questionId: q._id,
                selectedIndex: selectedAnswers[idx] ?? -1,
            }));
            let res = await API.post('/api/result/submit', { answers, tech: config.tech, level: config.level });
            toast.success(res.data.msg)
            onComplete(answers, res.data); // move to result page
        } catch (err) {
            toast.error('Error submitting quiz');
        }
    };

    if (loading) return <div className="text-center p-10">Loading...</div>;


    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text-default)] min-h-screen flex flex-col">
            {
                questions?.length ?
                    <div className="container mx-auto px-4 py-8 flex-1 flex flex-col max-w-4xl mt-20">
                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-[var(--color-border)] rounded-full mb-6">
                            <div
                                className="h-full bg-[var(--color-primary)] rounded-full"
                                style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>

                        {/* Quiz Card */}
                        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-lg p-6 flex-1 flex flex-col fade-in slide-in">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[var(--color-text-muted)]">
                                    Question {current + 1} of {questions.length}
                                </span>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 mr-1 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-[var(--color-accent)] font-medium">{String(timeLeft).padStart(2, '0')}s</span>
                                </div>
                            </div>

                            {/* Question */}
                            <h2 className="text-xl md:text-2xl font-bold mb-8">{q.question}</h2>

                            {/* Options */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {q.options.map((opt, idx) => (
                                    <label key={idx} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            className="hidden peer"
                                            name={`q${current}`}
                                            onClick={() => handleOptionSelect(idx)}
                                        />
                                        <div className={`p-4 border border-[var(--color-border)] rounded-lg h-full peer-checked:border-[var(--color-primary)] 
                  ${selectedAnswers[current] === idx ? 'bg-[var(--color-primary)]/10' : ''}`}>
                                            <div className="flex items-center">
                                                <div className={`w-6 h-6 rounded-full border mr-3 
                      ${selectedAnswers[current] === idx ? 'border-[var(--color-primary)] bg-[var(--color-primary)]' : 'border-[var(--color-border)]'}`}>
                                                    {selectedAnswers[current] === idx && <div className="w-3 h-3 rounded-full bg-white m-auto mt-1"></div>}
                                                </div>
                                                <span>{opt}</span>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                disabled={!isAnswered}
                                className="w-full py-3 px-4 bg-[var(--color-primary)] text-white font-medium rounded-lg mt-auto disabled:opacity-50"
                            >
                                {current === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
                            </button>
                        </div>
                    </div> :
                    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text-default)] px-4 text-center">
                        <h2 className="text-2xl font-bold mb-4">🚫 No Questions Available</h2>
                        <p className="text-[var(--color-text-muted)] max-w-md mb-6">
                            It looks like there are no quiz questions for your selected tech stack and experience level.
                            Please contact the administrator to add some questions.
                        </p>
                        <button
                            onClick={() => setStep("config")}
                            className="bg-[var(--color-primary)] text-white py-2 px-4 rounded-lg"
                        >
                            Go Back
                        </button>
                    </div>
            }

        </div>
    );
};

export default QuizPage;
