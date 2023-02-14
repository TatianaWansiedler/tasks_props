import React from 'react';
import s from './style.module.css'

const Part = ({part,tasks}) => {
    return (
        <div className={s.info}>
            <div>{part} </div>
            <div className={s.tasks}>
                {tasks}
            </div>
        </div>
    );
};

export default Part;