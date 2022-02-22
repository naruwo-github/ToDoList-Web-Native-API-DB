import React, { useEffect, useState } from 'react'
import { StyledAppFrame } from './style'
import { getAllTasks, createTask, deleteTaskById, putTaskById } from '../../global/httpHelper'
import TaskList from './taskList/taskList'
import CreateNewTask from './newTask/createNewTask'
import TaskDetail from './taskDetail/taskDetail'

export default function Standard () {
  const [error, setError] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [formTextValue, setFormTextValue] = useState<string>('')
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  useEffect(() => {
    getAllTasks().then(
      (result) => {
        console.log('Get Response : ', result)
        setIsLoaded(true)
        setTasks(result)
      },
      // コンポーネント内のバグによる例外を隠蔽しないため、ここでエラーハンドリングすることが重要
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  function taskLabelTapped (task: Task) {
    setSelectedTask(task)
  }

  function formTextChanged (event: any) {
    setFormTextValue(event.target.value)
  }

  function submitButtonTapped () {
    if (formTextValue === '') { return }

    createTask(`${formTextValue}`)
      .then(
        (result) => {
          console.log('Create Response : ', result)
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
  function updateSelectedTask (taskId: string, taskName: string) {
    if (taskName === '') { return }

    putTaskById(taskId, taskName)
      .then(
        (result) => {
          console.log('Put Response : ', result)
          const copiedTasks = tasks.concat()
          const matchedTask = copiedTasks.find((task) => {
            return task._id === taskId
          })
          if (typeof matchedTask === 'undefined') { return }
          matchedTask.name = taskName
          setTasks(copiedTasks)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  // TaskDetailコンポーネントに渡す関数
  function deleteSelectedTask (taskId: string) {
    deleteTaskById(taskId)
      .then(
        (result) => {
          console.log('Delete Response : ', result)
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
        <StyledAppFrame>
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
        </StyledAppFrame>
  )
}
