import React from 'react';
import "./styles.css";

import TagGame from '../../objects/TagGame';

const HistoryGame = ({ tags, isActive = false }) => (
    <ol className={`history-game ${isActive ? "-active" : ""}`}>
        {tags.map(({ content = "", className = "" }, key) => (
            <li className="item" key={key}>
                <TagGame content={content} className={className} />
            </li>
        ))}
    </ol>
);

export default HistoryGame;