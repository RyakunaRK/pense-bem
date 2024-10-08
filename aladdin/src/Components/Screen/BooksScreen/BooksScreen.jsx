import React from 'react';

export const BooksScreen = ({ setSelectedBook, selectedBook }) => {

    const handleNumberClick = (num) => {
        setSelectedBook(prev => prev + num);
    };
    return (
        <>
            <h1 id="sLivro">Selecione seu livro</h1>
            <div id="numlivro">
                <label htmlFor="livro">Número do Livro:</label>
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
                        className="digiNum"
                        onClick={() => handleNumberClick(index)} 
                    >
                        {index}
                    </button>
                ))}
            </div>
        </>
    );
};
