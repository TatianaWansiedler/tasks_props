import React, {useState} from 'react';
import s from './style.module.css'

const Form = ({handleAdd}) => {
    const [name, setName] = useState('')
    const [part, setPart] = useState('')
    const [tasks, setTasks] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const newCourse = {name, parts: [{id: Date.now(), part, tasks}]}
        handleAdd(newCourse)
        setName('')
        setPart('')
        setTasks('')
    }
    return (
        <div>
            <form className={s.form} onSubmit={onSubmit} >
                <input
                    className={s.input_text} 
                    type="text" 
                    value={name} 
                    placeholder="Название курса" 
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    className={s.input_text} 
                    type="text" 
                    value={part} 
                    placeholder="Тема" 
                    onChange={e => setPart(e.target.value)}
                />
                <input
                    className={s.input_text}  
                    type="number" 
                    value={tasks} 
                    placeholder="Количество заданий" 
                    onChange={e => setTasks(e.target.value)}
                />
                <input className={s.submit}  type="submit" value="Добавить" />
            </form>
            
        </div>
    );
};

export default Form;