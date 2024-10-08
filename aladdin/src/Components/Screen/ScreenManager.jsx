import React from 'react'
import { QuestsScreen } from "./QuestsScreen/QuestsScreen";
import { StartScreen } from "./StartScreen/StartScreen";
import { BooksScreen } from "./BooksScreen/BooksScreen";

export const ScreenManager = ({ screenToRender, selectedBook, selectedNumberIndex }) => {
    let nodeToUse = <StartScreen />;

    switch (screenToRender) {
        case 'quests':
            nodeToUse = (
                <QuestsScreen 
                    numLivro={selectedBook}
                />
            );
            break;
        case 'books':
            nodeToUse = (
                <BooksScreen 
                    selectedBook={selectedBook} 
                    selectedNumberIndex={selectedNumberIndex} 
                />
            );
            break;
        default:
            nodeToUse = <StartScreen />;
    }

    return (
        <div className="tela">
            {nodeToUse}
        </div>
    );
};
