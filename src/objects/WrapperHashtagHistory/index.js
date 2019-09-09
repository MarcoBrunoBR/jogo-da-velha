import React from 'react';

const WrapperHashtagHistory = ({children, active = false}) => (
    <div className={`wrapper-hashtagHistory ${active && '-active'}`}>
        {children}
    </div>
);

export default WrapperHashtagHistory;
