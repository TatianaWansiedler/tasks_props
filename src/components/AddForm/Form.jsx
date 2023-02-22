import axios from 'axios';
import React, {useState} from 'react';
import s from './style.module.css'

const addCourse = (data) => {
   return axios.post('http://localhost:3001/courses', data)
}

const Form = () => {
    const [name, setName] = useState('')
    const [part, setPart] = useState('')
    const [tasks, setTasks] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const newCourse = {name, parts: [{part, tasks}]}

        addCourse(newCourse)
        .then(res => {
            console.log(res)
            setName('')
            setPart('')
            setTasks('')
        })
        .catch(err => console.log(err))
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