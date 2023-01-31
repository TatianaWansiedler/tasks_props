import React from 'react';

const Part = ({name,tasks}) => {
    return (
        <p>
            Тема: {name} 
            <br />
            Количество задач: {tasks}
        </p>
    );
};

export default Part;