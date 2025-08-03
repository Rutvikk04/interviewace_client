'use client';
import QuizPage from '@/components/quiz/Quiz';
import QuizConfig from '@/components/quiz/QuizConfig';
import QuizResult from '@/components/quiz/QuizResult';
import React, { useState } from 'react';


const QuizMain = () => {
  const [step, setStep] = useState('config'); // 'config' | 'quiz' | 'result'
  const [config, setConfig] = useState(null); // { techStack, experience }
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [scoreData, setScoreData] = useState(null); // result info from backend

  const onStart = (data, questions) => {
    setConfig(data);
    setQuestions(questions);
    setStep('quiz');
  }
  return (
    <>
      {step === 'config' && (
        <QuizConfig
          onStart={onStart}
        />
      )}

      {step === 'quiz' && (
        <QuizPage
          questions={questions}
          config={config}
          onComplete={(submittedAnswers, result) => {
            setAnswers(submittedAnswers);
            setScoreData(result);
            setStep('result');
          }}
          setStep={setStep}
        />
      )}

      {step === 'result' && (
        <QuizResult
          scoreData={scoreData}
          onRetry={() => {
            setStep('config');
            setConfig(null);
            setQuestions([]);
            setAnswers([]);
            setScoreData(null);
          }}
        />
      )}
    </>
  );
};

export default QuizMain;
