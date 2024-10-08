import React, { useState } from 'react';
import { ScreenManager } from '../Screen/ScreenManager';
import './Gameboy.css';

const Gameboy = () => {
    const [screen, setScreen] = useState('');
    const [selectedBook, setSelectedBook] = useState('');

    const handleButtonClick = () => {
    
    };

    const handleReturn = () => {
        setSelectedBook(prev => prev.slice(0, -1));
    };

    const handleStart = () => {
        setScreen('books');
    };

    return (
        <div className="div">
            <div className='gameboy-div'>
                <div className="abuttom-div">
                    <button className="round-button" onClick={() => handleButtonClick('toggleScreen')}>A</button>
                </div>
                <div className="tbuttom-div">
                    <button className="triangle-button" onClick={handleButtonClick} id="t1">1</button>
                    <button className="triangle-button" onClick={handleButtonClick} id="t2">2</button>
                    <button className="triangle-button" onClick={handleButtonClick} id="t3">3</button>
                    <button className="triangle-button" onClick={handleButtonClick} id="t4">4</button>
                </div>
                <div className="rbuttom-div">
                    <button className="retangle" id="return" onClick={handleReturn}>return</button>
                    <button className="retangle" id="start" onClick={handleStart}>start</button>
                </div>
                
                <ScreenManager
                    screenToRender={screen}
                    selectedBook={selectedBook}
                    setSelectedBook={setSelectedBook}
                />
            </div>
        </div>
    );
};

export default Gameboy;
