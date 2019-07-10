import React from 'react';
import './styles.css';

const Label = ({ htmlFor, content }) => (
    <label htmlFor={htmlFor} className="label">{content}</label>
);

export default Label;