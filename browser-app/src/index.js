import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {getAllTasks, createTask, getTaskById, deleteTaskById, putTaskById} from './api/httpHelper'

class App extends React.Component {

    constructor(props) {
        super(props);
        // アプリ内で保持する状態やデータ
        this.state = {
            error: null,
            isLoaded: false,
            tasks: [],
            formTextValue: ""
        };
        this.formTextChanged = this.formTextChanged.bind(this);
        this.submitButtonTapped = this.submitButtonTapped.bind(this);
    }

    formTextChanged(event) {
        this.setState({formTextValue: event.target.value})
    }

    submitButtonTapped() {
        if (this.state.formTextValue === "") { return; }

        createTask(`${this.state.formTextValue}`,
            (result) => {
            const copiedTasks = this.state.tasks.concat();
            copiedTasks.push(result);
            this.setState({
                tasks: copiedTasks
            });
            }, (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }

    render() {
        const { error, isLoaded, tasks} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <ul>
                        {tasks.map(task=> (
                            <li key={task._id}>
                                {task.name}
                            </li>
                        ))}
                    </ul>
                    <label>
                        Create new task:
                        <input type="text" value={this.state.formTextValue} placeholder="Task Name" onChange={this.formTextChanged} />
                        <button onClick={this.submitButtonTapped}>Submit</button>
                    </label>
                </div>
            );
        }
    }

    // render後に一度だけ走る処理
    componentDidMount() {
        getAllTasks((result) => {
            this.setState({
                isLoaded: true,
                tasks: result
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
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