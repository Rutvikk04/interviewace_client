'use client';
import React from 'react';

const QuizResult = ({ scoreData, onRetry }) => {
    const { score, percentage } = scoreData;

    const getMessage = () => {
        if (percentage >= 90) return '🔥 Excellent work!';
        if (percentage >= 75) return '🎯 Great job!';
        if (percentage >= 50) return '👍 Good effort!';
        return '💡 Keep practicing!';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-text-default)] px-4">
            <div className="max-w-md w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-lg p-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Quiz Completed!</h1>
                <p className="text-lg text-[var(--color-text-muted)] mb-6">{getMessage()}</p>

                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                        <div className="text-sm text-[var(--color-text-muted)]">Correct</div>
                        <div className="text-xl font-semibold text-green-500">{score}</div>
                    </div>
                    <div>
                        <div className="text-sm text-[var(--color-text-muted)]">Total</div>
                        <div className="text-xl font-semibold">40</div>
                    </div>
                    <div>
                        <div className="text-sm text-[var(--color-text-muted)]">Score</div>
                        <div className="text-xl font-semibold text-blue-500">{percentage}%</div>
                    </div>
                </div>

                <button
                    onClick={onRetry}
                    className="w-full py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-medium rounded-lg transition"
                >
                    Retake Quiz
                </button>
            </div>
        </div>
    );
};

export default QuizResult;
