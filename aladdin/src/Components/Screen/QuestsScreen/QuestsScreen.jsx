import React, { useEffect, useRef } from 'react';

export const QuestsScreen = ({
    selectedNumberIndex,
    setSelectedNumberIndex,
    results,
    currentQuestion,
    totalScore,
    currentAttempt
}) => {
    const options = ['vm', 'am', 'az', 'vd'];
    const containerRef = useRef(null); // Ref para o container do scroll

    useEffect(() => {
        if (selectedNumberIndex < 0 || selectedNumberIndex >= options.length) {
            setSelectedNumberIndex(0);
        }
    }, [selectedNumberIndex, setSelectedNumberIndex, options.length]);

    // Efeito para rolar automaticamente para a direita quando resultados mudam
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
    }, [results]);

    return (
        <>
            <div
                ref={containerRef} // Adicionando a referência ao container de rolagem
                style={{
                    display: 'flex',
                    gap: '3px',
                    overflowX: 'auto',
                    paddingBottom: '10px',
                    scrollbarWidth: 'none', // Oculta a barra de rolagem no Firefox
                    msOverflowStyle: 'none' // Oculta a barra de rolagem no IE e Edge
                }}
                className="custom-scroll"
            >
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
                        {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                ))}
            </div>
            {currentQuestion < 30 ? (
                <>
                    <p id="tentativa">Tentativa: {currentAttempt}</p>
                    <h1 id='perguntaQ'>Pergunta {currentQuestion + 1}</h1>
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
