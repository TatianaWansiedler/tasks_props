import { useEffect, useState } from "react"
import Content from "../Content/Content"
import Header from "../Header/Header"
import Total from "../Total/Total"
import axios from 'axios';
import s from './style.module.css'
import Form from "../AddForm/Form";

const fetchRequest = () => {
  return axios.get('http://localhost:3001/courses')
}

const App = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetchRequest()
      .then(resp => setCourses(resp.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={s.container}>
      <Form/>
      {
        courses.map(course =>
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>)
      }
    </div>
  );
}

export default App;

// Сделать добавление нового курса
// 1. Создать форму добавления нового курса
// 2. Добавить поля, которые нужны для каждого документа в db.json
// 2.1 Создать объект, который вы хотите добавить в db.json
// 3. Отправить post запрос для добавления данных в db.json

