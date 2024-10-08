import React from 'react';

export const BooksScreen = ({ selectedBook, selectedNumberIndex }) => {
    return (
        <>
            <h1 id="sLivro">Selecione seu livro</h1>
            <div id="numlivro">
                <input
                    id="livro"
                    value={selectedBook}
                    placeholder="Digite o número"
                    readOnly
                />
            </div>
            <div id="tecladoNum">
                {Array.from({ length: 10 }, (_, index) => (
                    <button
                        id={`b${index}`}
                        key={index}
                        className={`digiNum ${index === selectedNumberIndex ? 'selected' : ''}`}
                        style={{ userSelect: 'none' }}
                    >
                        {index === selectedNumberIndex ? `${index}` : index}
                    </button>
                ))}
            </div>
        </>
    );
};
