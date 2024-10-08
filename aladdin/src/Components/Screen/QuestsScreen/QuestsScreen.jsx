import React from 'react';

export const QuestsScreen = ({ numPergunta }) => {
    const options = ['vm', 'am', 'az', 'vd'];

    return (
        <>
            <h1>Pergunta {numPergunta}</h1>
            <div className="opcoes">
                {options.map((option) => (
                    <button key={option} className="resposta" id={option}>
                        {option}
                    </button>
                ))}
            </div>
        </>
    );
};
