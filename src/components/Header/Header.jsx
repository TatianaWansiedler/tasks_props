import React from 'react';
import s from './style.module.css'

const Header = ({name}) => {
 
    return (
        <h1 className={s.title}>
            {name} 
        </h1>
    );
};

export default Header;







