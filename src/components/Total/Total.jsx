import React from 'react';

const Total = ({parts}) => {
    const sum = parts.reduce((sum,el) => sum + el.tasks,0)

    return (
        <p>количество задач в курсе: {sum}</p>   
    );
};

export default Total;