import React, {useState} from 'react';

import s from './style.module.css'

const Part = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [part, setPart] = useState(props.part)
    const [tasks, setTasks] = useState(props.tasks)

    const handleEdit = () => {
        setEditMode(true)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        props.updatePart({ id: props.id, part, tasks}, props.index)
        setEditMode(false)
    }
    
    return (
        <>
            { !editMode ? 
                <div className={s.info}>
                    <div>{part} </div>
                    <div className={s.tasks}>
                        {tasks}
                    </div>
                    <button onClick={handleEdit}>редактировать</button>
                </div>
                :   < >
                        <form className={s.form} onSubmit={onSubmit} >
                            <input 
                                className={s.input}
                                type="text" 
                                value={part} 
                                id="part"
                                placeholder="Тема" 
                                onChange={e => setPart(e.target.value)}
                            />
                            <input
                                className={s.input}
                                type="number" 
                                value={tasks} 
                                id="tasks"
                                placeholder="Количество заданий" 
                                onChange={e => setTasks(e.target.value)}
                            />
                            <input className={s.btn} type="submit" value="сохранить"/>
                        </form>
                    </>
            }
        </>

    );
};

export default Part;