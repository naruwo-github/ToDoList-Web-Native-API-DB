import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {getAllTasks, createTask, getTaskById, deleteTaskById, putTaskById} from './api/httpHelper'
import TaskList from "./components/taskList";
import TaskDetail from "./components/taskDetail";

class App extends React.Component {

    constructor(props) {
        super(props);
        // アプリ内で保持する状態やデータ
        this.state = {
            error: null,
            isLoaded: false,
            tasks: [],
            formTextValue: "",
            selectedTask: null
        };
        // 関数の中でthisにアクセスするために、thisをバインドする必要がある
        this.taskLabelTapped = this.taskLabelTapped.bind(this);
        this.formTextChanged = this.formTextChanged.bind(this);
        this.submitButtonTapped = this.submitButtonTapped.bind(this);
        this.deleteSelectedTask = this.deleteSelectedTask.bind(this);
    }

    taskLabelTapped(task) {
        this.setState({selectedTask: task});
    }

    formTextChanged(event) {
        this.setState({formTextValue: event.target.value});
    }

    submitButtonTapped() {
        if (this.state.formTextValue === "") { return; }

        createTask(`${this.state.formTextValue}`,
            (result) => {
                const copiedTasks = this.state.tasks.concat();
                copiedTasks.push(result);
                this.setState({tasks: copiedTasks});
            },
            (error) => {
                this.setState({isLoaded: true, error});
            }
        );
        this.setState({formTextValue: ""});
    }

    // TaskDetailコンポーネントに渡す関数
    deleteSelectedTask(taskId) {
        deleteTaskById(taskId,
            (result) => {
                const copiedTasks = this.state.tasks.concat().filter((task) => {
                    return task._id !== taskId;
                })
                this.setState({tasks: copiedTasks, selectedTask: null});
            },
            (error) => {
                this.setState({isLoaded: true, error});
            }
        )
    }

    render() {
        const { error, isLoaded, tasks, formTextValue, selectedTask} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>ToDoList</h1>
                    <TaskList tasks={tasks} taskLabelTapped={this.taskLabelTapped} />
                    <label>
                        Create new task:
                        <input type="text" value={formTextValue} placeholder="Task Name" onChange={this.formTextChanged} />
                        <button onClick={this.submitButtonTapped}>Submit</button>
                    </label>
                    {/* taskが選択されている場合にのみ、TaskDetailコンポーネントを表示する */}
                    {selectedTask === null ? (
                        <p>Select a task!</p>
                    ) : (
                        <TaskDetail task={selectedTask} deleteSelectedTask={this.deleteSelectedTask} />
                    )}
                </div>
            );
        }
    }

    // render後に一度だけ走る処理
    componentDidMount() {
        getAllTasks((result) => {
                this.setState({isLoaded: true, tasks: result});
            }, (error) => {
                this.setState({isLoaded: true, error});
            }
        );
    }

    // render後に毎回必ず走る処理（レイアウトを変更するような処理→render→これ）
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    // componentが破棄される時に走る処理（画面遷移時とか）
    componentWillUnmount() {
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);