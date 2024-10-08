import React, { useEffect, useState } from 'react';
import { gabaritos } from '../../../../penseBem.js';

export const QuestsScreen = ({
    selectedNumberIndex,
    setSelectedNumberIndex,
    results,
    currentQuestion
}) => {
    const options = ['vm', 'am', 'az', 'vd'];
    const [correctCount, setCorrectCount] = useState();

    useEffect(() => {
        if (selectedNumberIndex < 0 || selectedNumberIndex >= options.length) {
            setSelectedNumberIndex(0);
        }
    }, [selectedNumberIndex, setSelectedNumberIndex, options.length]);

    useEffect(() => {
        setCorrectCount(results.filter(result => result).length);
    }, [currentQuestion])

    return (
        currentQuestion < 30 ? (
            <>
                <h1>Pergunta {currentQuestion + 1}</h1>
                <div className="opcoes">
                    {options.map((option, index) => (
                        <button
                            key={option}
                            className={`resposta ${selectedNumberIndex === index ? 'selected' : ''}`}
                            id={option}
                            onClick={() => setSelectedNumberIndex(index)}
                        >
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
        ) : (
            <>
                <h1>Score {correctCount}/30</h1>
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
        )
    );
};
