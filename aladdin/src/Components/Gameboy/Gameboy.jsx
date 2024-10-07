import React from 'react';
import './Gameboy.css'

const Gameboy = () => {
    return (
    <div className="div">
        <div className='gameboy-div'>
            <div className="abuttom-div">
                <button className="round-button">A</button>
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
            <div className='tela'>
                <h1>Pergunta</h1>
                <button className="resposta" id="vm">vm</button>
                <button className="resposta" id="am">am</button>
                <button className="resposta" id="az">az</button>
                <button className="resposta" id="vd">vd</button>
                <spam id="numPergunta">25</spam>
            </div>
        </div>
    </div>
    );
}

export default Gameboy;