import React, { useEffect, useState } from 'react';
import { gabaritos } from '../../../../penseBem.js';

export const QuestsScreen = ({ numLivro }) => {
    const options = ['vm', 'am', 'az', 'vd'];
    
    const [gabarito, setGabarito] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const gabaritoIndex = numLivro - 41;
        setGabarito(gabaritos[gabaritoIndex]);
    }, [numLivro]);

    const handleAnswerSelection = (answer) => {
        const isCorrect = answer === gabarito[currentQuestion];
        setResults((prevResults) => [...prevResults, isCorrect]);
        setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        console.log(gabarito, userAnswers)
    };

    return (
        <>
            <h1>Pergunta {currentQuestion + 1}</h1>
            <div className="opcoes">
                {options.map((option, index) => (
                    <button
                        key={option}
                        className="resposta"
                        id={option}
                        onClick={() => handleAnswerSelection(index + 1)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
                {results.map((result, index) => (
                    <span
                        key={index}
                        style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: result ? '#4cb83e' : '#b83e3e',
                            fontSize: '8px',
                            textAlign: 'center',
                            fontFamily: 'Minecraft'
                        }}
                    >
                        {index + 1}
                    </span>
                ))}
            </div>
        </>
    );
};
