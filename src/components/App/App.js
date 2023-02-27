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
const addCourse = (data) => {
  return axios.post('http://localhost:3001/courses', data)
}
const deleteCourse = (id) => {
  return axios.delete(`http://localhost:3001/courses/${id}`)
}

const changePart = (id, data) => {
  return axios.put(`http://localhost:3001/courses/${id}`, data)
}


const App = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetchRequest()
      .then(resp => setCourses(resp.data))
      .catch(err => console.log(err))
  }, [])

  const handleAdd = (newCourse) => {
    addCourse(newCourse)
      .then(res => {
        console.log(res)
        setCourses([...courses, newCourse])
      })
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    deleteCourse(id)
      .then(res => {
        console.log(res)
        setCourses(courses.filter(el => el.id !== id))
      })
      .catch(err => console.log(err))

  }

  const updatePart = (id) => {
    return (data, index) => {
      const course = courses.find(el => el.id === id)
      let target = course.parts
      target[index] = data
      changePart(id, {
        ...course,
        parts: target
      })
        .then(res => {
          console.log(res)
          setCourses([...courses])
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className={s.container}>
      <Form handleAdd={handleAdd} />
      {
        courses.map((course) =>
          <div key={course.id} className={s.course}>
            <div className={s.header}>
              <Header name={course.name} />
              <button onClick={() => handleDelete(course.id)}>удалить курс</button>
            </div>
            <Content
              parts={course.parts}
              id={course.id}
              updatePart={updatePart(course.id)}
            />
            <Total parts={course.parts} />
          </div>)
      }
    </div>
  );
}

export default App;

// добавить функции удаления и редактирования 

