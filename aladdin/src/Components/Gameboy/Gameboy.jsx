import React, { useState } from 'react';
import { QuestsScreen } from '../Screen/QuestsScreen';
import {BooksScreen} from '../Screen/BooksScreen';
import './Gameboy.css'

const Gameboy = () => {
    const [questNumber,setQuestNumber] = useState(1)
    const [oi,setOi] = useState(false)
    const handleClick = () => {
        setOi(!oi)
    }
    return (
    <div className="div">
        <div className='gameboy-div'>
            <div className="abuttom-div">
                <button className="round-button" onClick={handleClick}>A</button>
            </div>
            <div className="tbuttom-div">
                <button className="triangle-button" id="t1">1</button>
                <button className="triangle-button" id="t2">2</button>
                <button className="triangle-button" id="t3">3</button>
                <button className="triangle-button" id="t4">4</button>
            </div>
            <div className='rbuttom-div'>
                <button className='retangle' id="return">return</button>
                <button className='retangle' id="exit">exit</button>
            </div>
            {oi && <QuestsScreen numPergunta={questNumber}/>}
        </div>
    </div>
    );
}

export default Gameboy;