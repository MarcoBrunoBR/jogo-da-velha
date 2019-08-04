import React from 'react';
import './styles.css';

import Input from '../Input';
import Label from '../Label';

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
    <>
        <Input id={id} value={value} type="checkbox" content={content} />
        <Label htmlFor={id} content={content} />
    </>
)

export default InputCheckbox;