import React from 'react';

export const BooksScreen = ({ setSelectedBook, selectedBook }) => {
    const handleNumberClick = (num) => {
        const inputField = document.getElementById('livro');
        setSelectedBook(...inputField);
    };

    const handleInputChange = (e) => {
        setSelectedBook(e.target.value);
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
                    onChange={handleInputChange}
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
