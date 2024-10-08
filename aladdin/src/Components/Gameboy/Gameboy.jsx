import React, { useState } from 'react';
import { QuestsScreen } from '../Screen/QuestsScreen/QuestsScreen';
import { BooksScreen } from '../Screen/BooksScreen/BooksScreen';
import './Gameboy.css';

const Gameboy = () => {
    const [screen, setScreen] = useState('books');
    const [questNumber, setQuestNumber] = useState(1);
    const [selectedBook, setSelectedBook] = useState('');

    const handleButtonClick = (action) => {
        switch (action) {
            case 'toggleScreen':
                setScreen(screen === 'books' ? 'quests' : 'books');
                break;
            case 'nextQuestion':
                setQuestNumber((prev) => prev + 1);
                break;
            case 'reset':
                setScreen('books');
                setQuestNumber(1);
                break;
            default:
                break;
        }
    };

    return (
        <div className="gameboy-div">
            <div className="abuttom-div">
                <button className="round-button" onClick={() => handleButtonClick('toggleScreen')}>A</button>
            </div>
            <div className="tbuttom-div">
                {Array.from({ length: 4 }, (_, index) => (
                    <button
                        key={index}
                        className="triangle-button"
                        onClick={() => handleButtonClick('nextQuestion')}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div className="rbuttom-div">
                <button className="retangle" onClick={() => handleButtonClick('reset')}>return</button>
                <button className="retangle" onClick={() => setScreen('exit')}>exit</button>
            </div>

            {screen === 'books' && <BooksScreen setSelectedBook={setSelectedBook} />}
            {screen === 'quests' && <QuestsScreen numPergunta={questNumber} />}
        </div>
    );
};

export default Gameboy;
