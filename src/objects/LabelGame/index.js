import React from 'react';
import './styles.css';

const LabelGame = ({ htmlFor = "", content = "", children = "", onClick }) => (
    <label htmlFor={htmlFor} className="label-game" onClick={onClick}>{children}{content}</label>
);

export default LabelGame;