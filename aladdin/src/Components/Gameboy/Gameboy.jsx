import React, { useEffect, useState } from 'react';
import { ScreenManager } from '../Screen/ScreenManager';
import './Gameboy.css';
import { gabaritos } from '../../../penseBem.js';

const Gameboy = () => {
    const [screen, setScreen] = useState('');
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedNumberIndex, setSelectedNumberIndex] = useState(0);
    const [gabarito, setGabarito] = useState([]);
    const [audio] = useState(new Audio('/Sound/click.mp3'));
    const [results, setResults] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const playSound = () =>{
        audio.currentTime = 0;
        audio.play();
    }

    useEffect(() => {
        if (screen === 'quests') {
            setSelectedNumberIndex(1);
            const gabaritoIndex = selectedBook - 41;
            if (gabaritos[gabaritoIndex]) {
                setGabarito(gabaritos[gabaritoIndex]);
            } else {
                setGabarito([]);
            }
        }
    }, [screen]);
    

    const handleAnswerSelection = (answer) => {
        if (results.length === 30) return;
        const isCorrect = answer === gabarito[currentQuestion];
        setResults((prevResults) => [...prevResults, isCorrect]);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    };

    const handleLeft = () => {
        setSelectedNumberIndex(prev => (prev - 1 + 10) % 10); 
        playSound();
    };

    const handleRight = () => {
        setSelectedNumberIndex(prev => (prev + 1) % 10);
        playSound();
    };

    const handleSelectNumber = () => {
        if (screen === 'quests') {
            handleAnswerSelection(selectedNumberIndex);
            return;
        }

        setSelectedBook(prev => prev + selectedNumberIndex);
    };

    const handleReturn = () => {
        if (screen === 'quests') {
            setScreen('books');
            setSelectedBook('')
            setSelectedNumberIndex(0)
            setScreen('books');
            setResults([])
            setCurrentQuestion(0)
            return;
        }

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
                    setSelectedNumberIndex={setSelectedNumberIndex}
                    results={results}
                    currentQuestion={currentQuestion}
                />
            </div>
        </div>
    );
};

export default Gameboy;
