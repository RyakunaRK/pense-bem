import React from 'react';

export const QuestsScreen = ({
    selectedNumberIndex,
    setSelectedNumberIndex,
    results,
    currentQuestion,
    scorePerQuestion,
    totalScore,
    firstTryCorrect
}) => {
    const options = ['vm', 'am', 'az', 'vd'];

    React.useEffect(() => {
        if (selectedNumberIndex < 0 || selectedNumberIndex >= options.length) {
            setSelectedNumberIndex(0);
        }
    }, [selectedNumberIndex, setSelectedNumberIndex, options.length]);

    return (
        <>
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
            {currentQuestion < 30 ? (
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
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h1>Pontuação Total: {totalScore}/90</h1>
                </>
            )}
        </>
    );
};
