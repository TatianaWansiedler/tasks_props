import { useEffect, useState } from "react"
import Content from "../Content/Content"
import Header from "../Header/Header"
import Total from "../Total/Total"
import axios from 'axios';
import s from './style.module.css'

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
      {
        courses.map(cours =>
          <div key={cours.id}>
            <Header name={cours.name} />
            <Content parts={cours.parts} />
            <Total parts={cours.parts} />
          </div>)
      }
    </div>
  );
}

export default App;


/*
  Создать db.json, запустить его с помощью команды json-server.
  Предварительно заполнить файл db.json, создав коллекцию parts, в которой
  должны быть parts и tasks.
  Создать parts только для Frontend Course. 
  {
    parts: [
      {
        id: 1,
        part: "Вводные занятия по React"б
        task: 10,
        category: "Frontend"
      },
    ]
  } 
  После запуска сервера, запросить parts с помощью axios и отрисовать
  в UI
*/