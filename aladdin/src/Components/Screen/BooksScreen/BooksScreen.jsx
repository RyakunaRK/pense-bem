export const BooksScreen = () =>{
    return(
    <div className='tela'>
        <h1 id="sLivro">Selecione seu livro</h1>
        <div id="numlivro">
            <input id="livro"placeholder="valor"></input>
        </div>
        <div id="tecladoNum">
            <button className="digiNum" id="b1">0</button>
            <button className="digiNum" id="b1">1</button>
            <button className="digiNum" id="b1">2</button>
            <button className="digiNum" id="b1">3</button>
            <button className="digiNum" id="b1">4</button>
            <button className="digiNum" id="b1">5</button>
            <button className="digiNum" id="b1">6</button>
            <button className="digiNum" id="b1">7</button>
            <button className="digiNum" id="b1">8</button>
            <button className="digiNum" id="b1">9</button>
        </div>
    </div>
    );
}