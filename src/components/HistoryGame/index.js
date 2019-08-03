import React from 'react';
import "./styles.css";

import TagGame from '../../objects/TagGame';

const HistoryGame = ({ tags }) => (
    <ol className="history-game">
        {tags.map(({ content = "", className = "" }) => (
            <li className="item">
                <TagGame content={content} className={className} />
            </li>
        ))}
    </ol>
);

export default HistoryGame;