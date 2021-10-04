import React from 'react'
import { getAllTasks, createTask, deleteTaskById, putTaskById } from '../api/httpHelper'
import TaskList from '../components/taskList/taskList'
import CreateNewTask from '../components/createNewTask/createNewTask'
import TaskDetail from '../components/taskDetail/taskDetail'

export class App extends React.Component {
  constructor (props) {
    super(props)
    // アプリ内で保持する状態やデータ
    this.state = {
      error: null,
      isLoaded: false,
      tasks: [],
      formTextValue: '',
      selectedTask: null
    }
    // 関数の中でthisにアクセスするために、thisをバインドする必要がある
    this.taskLabelTapped = this.taskLabelTapped.bind(this)
    this.formTextChanged = this.formTextChanged.bind(this)
    this.submitButtonTapped = this.submitButtonTapped.bind(this)
    this.updateSelectedTask = this.updateSelectedTask.bind(this)
    this.deleteSelectedTask = this.deleteSelectedTask.bind(this)
  }

  taskLabelTapped (task) {
    this.setState({ selectedTask: task })
  }

  formTextChanged (event) {
    this.setState({ formTextValue: event.target.value })
  }

  submitButtonTapped () {
    if (this.state.formTextValue === '') { return }

    createTask(`${this.state.formTextValue}`,
      (result) => {
        const copiedTasks = this.state.tasks.concat()
        copiedTasks.push(result)
        this.setState({ tasks: copiedTasks })
      },
      (error) => {
        this.setState({ isLoaded: true, error })
      }
    )
    this.setState({ formTextValue: '' })
  }

  // TaskDetailコンポーネントに渡す関数
  updateSelectedTask (taskId, taskName) {
    if (taskName === '') { return }

    putTaskById(taskId, taskName,
      (result) => {
        console.log(result)
        const copiedTasks = this.state.tasks.concat()
        copiedTasks.find((task) => {
          return task._id === taskId
        }).name = taskName
        this.setState({ tasks: copiedTasks })
      },
      (error) => {
        this.setState({ isLoaded: true, error })
      }
    )
  }

  // TaskDetailコンポーネントに渡す関数
  deleteSelectedTask (taskId) {
    deleteTaskById(taskId,
      (result) => {
        console.log(result)
        const copiedTasks = this.state.tasks.concat().filter((task) => {
          return task._id !== taskId
        })
        this.setState({ tasks: copiedTasks, selectedTask: null })
      },
      (error) => {
        this.setState({ isLoaded: true, error })
      }
    )
  }

  render () {
    const { error, isLoaded, tasks, formTextValue, selectedTask } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h1>ToDoList</h1>
          <TaskList tasks={tasks} taskLabelTapped={this.taskLabelTapped}/>
          <CreateNewTask formTextValue={formTextValue} formTextChanged={this.formTextChanged}
                         submitButtonTapped={this.submitButtonTapped}/>
          {selectedTask === null ? (
            <h2>Select a task!</h2>
          ) : (
            <TaskDetail task={selectedTask} updateSelectedTask={this.updateSelectedTask}
                        deleteSelectedTask={this.deleteSelectedTask}/>
          )}
        </div>
      )
    }
  }

  // render後に一度だけ走る処理
  componentDidMount () {
    getAllTasks((result) => {
        this.setState({ isLoaded: true, tasks: result })
      }, (error) => {
        this.setState({ isLoaded: true, error })
      }
    )
  }

  // render後に毎回必ず走る処理（レイアウトを変更するような処理→render→これ）
  componentDidUpdate (prevProps, prevState, snapshot) {
  }

  // componentが破棄される時に走る処理（画面遷移時とか）
  componentWillUnmount () {
  }
}