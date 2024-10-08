import React from 'react'
import { QuestsScreen } from "./QuestsScreen/QuestsScreen";
import { StartScreen } from "./StartScreen/StartScreen";
import { BooksScreen } from "./BooksScreen/BooksScreen";

export const ScreenManager = ({ screenToRender, selectedBook, setSelectedBook }) => {
    let nodeToUse = <StartScreen />;

    switch (screenToRender) {
        case 'quests':
            nodeToUse = <QuestsScreen />;
            break;
        case 'books':
            nodeToUse = (
                <BooksScreen 
                    setSelectedBook={setSelectedBook} 
                    selectedBook={selectedBook} 
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
