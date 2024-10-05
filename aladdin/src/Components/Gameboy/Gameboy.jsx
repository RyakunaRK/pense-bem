import React from 'react';
import './Gameboy.css'

const Gameboy = () => {
    return (
    <div className="div">
        <div className='gameboy-div'>
            <div className="abuttom-div">
                <button className="round-button"></button>
            </div>
            <div className="tbuttom-div">
                <button className="triangle-button" id="t1"></button>
                <button className="triangle-button" id="t2">2</button>
                <button className="triangle-button" id="t3">3</button>
                <button className="triangle-button" id="t4">4</button>
            </div>
        </div>
    </div>
    );
}

export default Gameboy;