import React from 'react';
import Part from '../Part/Part';
import s from './style.module.css'


const Content = ({parts,updatePart}) => {
    return (
        <div>
            <div className={s.sub_title}>
                <p>Тема </p>
                <p>Количество задач</p>
            </div>
            <div className={s.box}>
                {
                    parts.map((el,i) => <Part key={i} {...el} index={i} updatePart={updatePart}/>)
                }
            </div>
        </div>
    );
};

export default Content;