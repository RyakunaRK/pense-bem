import React from 'react';

export const BooksScreen = ({ setSelectedBook }) => {
    const handleNumberClick = (num) => {
        const inputField = document.getElementById('livro');
        inputField.value += num;
    };

    const handleInputChange = (e) => {
        setSelectedBook(e.target.value);
    };

    return (
        <div className="tela">
            <h1 id="sLivro">Selecione seu livro</h1>
            <div id="numlivro">
                <label htmlFor="livro">Número do Livro:</label>
                <input
                    id="livro"
                    placeholder="Digite o número"
                    onChange={handleInputChange}
                />
            </div>
            <div id="tecladoNum">
                {Array.from({ length: 10 }, (_, index) => (
                    <button
                        key={index}
                        className="digiNum"
                        onClick={() => handleNumberClick(index)}
                    >
                        {index}
                    </button>
                ))}
            </div>
        </div>
    );
};
