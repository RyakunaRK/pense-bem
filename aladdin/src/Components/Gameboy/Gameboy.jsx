import React, { useState } from 'react';
import { ScreenManager } from '../Screen/ScreenManager';
import './Gameboy.css';

const Gameboy = () => {
    const [screen, setScreen] = useState('');
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedNumberIndex, setSelectedNumberIndex] = useState(0);
    const [audio] = useState(new Audio('/Sound/click.mp3'));
    const playSound = () =>{
        audio.currentTime = 0;
        audio.play();
    }

    const handleLeft = () => {
        setSelectedNumberIndex(prev => (prev - 1 + 10) % 10); 
        playSound();
    };

    const handleRight = () => {
        setSelectedNumberIndex(prev => (prev + 1) % 10);
        playSound();
    };

    const handleSelectNumber = () => {
        setSelectedBook(prev => prev + selectedNumberIndex);
    };

    const handleReturn = () => {
        setSelectedBook(prev => prev.slice(0, -1));
    };

    const handleStart = () => {
        if (!selectedBook) {
            setScreen('books');
            return;
        }

        setScreen('quests');
    };

    return (
        <div className="div">
            <div className='gameboy-div'>
                <div className="abuttom-div">
                    <button className="round-button" onClick={handleSelectNumber}>A</button>
                </div>
                <div className="tbuttom-div">
                <button className="triangle-button" onClick={handleLeft} id="t1">1</button>
                    <button className="triangle-button" onClick={handleLeft} id="t2">2</button>
                    <button className="triangle-button" onClick={handleLeft} id="t3">3</button>
                    <button className="triangle-button" onClick={handleRight} id="t4">4</button>
                </div>
                <div className="rbuttom-div">
                    <button className="retangle" id="return" onClick={handleReturn}>return</button>
                    <button className="retangle" id="start" onClick={handleStart}>start</button>
                </div>
                
                <ScreenManager
                    screenToRender={screen}
                    selectedBook={selectedBook}
                    selectedNumberIndex={selectedNumberIndex}
                />
            </div>
        </div>
    );
};

export default Gameboy;
