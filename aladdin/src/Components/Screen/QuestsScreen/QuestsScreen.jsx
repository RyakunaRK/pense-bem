export const QuestsScreen = ({numPergunta}) =>{
    return(
    <div className='tela'>
        <h1>Pergunta</h1>
            <div className='opcoes'>
            <button className="resposta" id="vm">vm</button>
            <button className="resposta" id="am">am</button>
            <button className="resposta" id="az">az</button>
            <button className="resposta" id="vd">vd</button>
        </div>
        <spam id="numPergunta">{numPergunta}</spam>
    </div>
    );
}