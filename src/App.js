import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import Total from "./components/Total/Total"

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Frontend Pro",
      parts: [
        {
          id: 1,
          name: "Вводные занятия по React",
          tasks: 10
        },
        {
          id: 2,
          name: "Использование React хуков",
          tasks: 5
        },
        {
          id: 3,
          name: "Использование библиотеки react-router-dom",
          tasks: 15
        }
      ]
    },
    {
      id: 2,
      name: "Frontend Basic",
      parts: [
        {
          id: 1,
          name: "Основы HTML, CSS",
          tasks: 12
        },
        {
          id: 2,
          name: "JS. Работа с массивами и циклами",
          tasks: 7
        },
        {
          id: 3,
          name: "DOM. Поиск элементов",
          tasks: 5
        }
      ]
    }
  ]

  const globalTotal = courses.reduce((sum, el) => sum + el.parts.reduce((prev, item) => prev + item.tasks, 0), 0)

  return (
    <div className="App">
      {
        courses.map(cours =>
          <div key={cours.id}>
            <Header name={cours.name} />
            <Content parts={cours.parts} />
            <Total parts={cours.parts} />
          </div>)
      }
      <h3> Общее количество задач: {globalTotal}</h3>
    </div>
  );
}

export default App;


