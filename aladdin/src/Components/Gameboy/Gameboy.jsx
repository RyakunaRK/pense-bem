import React, { useEffect, useState } from 'react';
import { ScreenManager } from '../Screen/ScreenManager';
import './Gameboy.css';
import { gabaritos } from '../../../penseBem.js';

const Gameboy = () => {
    const [screen, setScreen] = useState('');
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedNumberIndex, setSelectedNumberIndex] = useState(0);
    const [gabarito, setGabarito] = useState([]);
    const [audio] = useState(new Audio('/Sound/clickButton.mp3'));
    const [audioAButtom] = useState(new Audio('/Sound/aButton.wav'));
    const [audioStartReturn] = useState(new Audio('/Sound/pressFirstStart.mp3'));
    const [audioGame] = useState(new Audio('/Sound/posSelectBook.mp3'));
    const [audioQuests] = useState(new Audio('/Sound/questsScreen.mp3'));
    audio.volume = 1;
    audioAButtom.volume = 0.1;
    const [results, setResults] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    audioQuests.addEventListener('ended', () => {
        audioQuests.currentTime = 0;
        audioQuests.play();
    })

    const playSound = () =>{
        audio.currentTime = 0;
        audio.play();
    }

    const playSound2 = () =>{
        audioAButtom.currentTime = 0;
        audioAButtom.play();
    }

    const playSound3 = () =>{
        audioStartReturn.currentTime = 0;
        audioStartReturn.play();
    }

    const playSound4 = () =>{
        audioGame.currentTime = 0;
        audioGame.play();
        setTimeout( () => {
            audioQuests.currentTime = 0;
            audioQuests.play();
        }, 2000);
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
        playSound();
        setSelectedNumberIndex(prev => (prev - 1 + 10) % 10); 
    };

    const handleRight = () => {
        playSound();
        setSelectedNumberIndex(prev => (prev + 1) % 10);
    };

    const handleSelectNumber = () => {
        if (screen === 'quests') {
            playSound2();
            handleAnswerSelection(selectedNumberIndex);
            return;
        }
        playSound2();
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
            playSound3();
            return;
        }

        setScreen('quests');
        playSound4();
    };

    return (
        <div className="div">
            <div className='gameboy-div'>
                <div className="abuttom-div">
                    <button className="round-button" onClick={handleSelectNumber}></button>
                </div>
                <div className="tbuttom-div">
                <button className="triangle-button" onClick={handleLeft} id="t1"></button>
                    <button className="triangle-button" onClick={handleLeft} id="t2"></button>
                    <button className="triangle-button" onClick={handleLeft} id="t3"></button>
                    <button className="triangle-button" onClick={handleRight} id="t4"></button>
                </div>
                <div className="rbuttom-div">
                    <button className="retangle" id="return" onClick={handleReturn}></button>
                    <button className="retangle" id="start" onClick={handleStart}></button>
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
