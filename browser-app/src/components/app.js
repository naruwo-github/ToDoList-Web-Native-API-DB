import React, { useEffect, useState } from 'react'
import { getAllTasks, createTask, deleteTaskById, putTaskById } from '../api/httpHelper'
import TaskList from '../components/taskList/taskList'
import CreateNewTask from '../components/createNewTask/createNewTask'
import TaskDetail from '../components/taskDetail/taskDetail'

export default function App () {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [tasks, setTasks] = useState([])
  const [formTextValue, setFormTextValue] = useState('')
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    getAllTasks((result) => {
        setIsLoaded(true)
        setTasks(result)
      }, (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  function taskLabelTapped (task) {
    setSelectedTask(task)
  }

  function formTextChanged (event) {
    setFormTextValue(event.target.value)
  }

  function submitButtonTapped () {
    if (formTextValue === '') { return }

    createTask(`${formTextValue}`,
      (result) => {
        const copiedTasks = tasks.concat()
        copiedTasks.push(result)
        setTasks(copiedTasks)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
    setFormTextValue('')
  }

  // TaskDetailコンポーネントに渡す関数
  function updateSelectedTask (taskId, taskName) {
    if (taskName === '') { return }

    putTaskById(taskId, taskName,
      (result) => {
        console.log(result)
        const copiedTasks = tasks.concat()
        copiedTasks.find((task) => {
          return task._id === taskId
        }).name = taskName
        setTasks(copiedTasks)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }

  // TaskDetailコンポーネントに渡す関数
  function deleteSelectedTask (taskId) {
    deleteTaskById(taskId,
      (result) => {
        console.log(result)
        const copiedTasks = tasks.concat().filter((task) => {
          return task._id !== taskId
        })
        setTasks(copiedTasks)
        setSelectedTask(null)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }

  return (
    error ? <div>Error: {error.message}</div> :
      !isLoaded ? <div>Loading</div> :
        <div>
          <h1>ToDoList</h1>
          <TaskList
            tasks={tasks}
            taskLabelTapped={taskLabelTapped}
          />
          <CreateNewTask
            formTextValue={formTextValue}
            formTextChanged={formTextChanged}
            submitButtonTapped={submitButtonTapped}
          />
          {selectedTask === null ? (
            <h2>Select a task!</h2>
          ) : (
            <TaskDetail
              _id={selectedTask._id}
              name={selectedTask.name}
              description={selectedTask.description}
              created_date={selectedTask.created_date}
              __v={selectedTask.__v}
              updateSelectedTask={updateSelectedTask}
              deleteSelectedTask={deleteSelectedTask}
            />
          )}
        </div>
  )
}
