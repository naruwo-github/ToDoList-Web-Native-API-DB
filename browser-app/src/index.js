import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Base extends React.Component {

    constructor(props) {
        super(props);
        // アプリ内で保持する状態やデータ
        this.state = {
            error: null,
            isLoaded: false,
            tasks: []
        }
    }

    render() {
        const { error, isLoaded, tasks} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {tasks.map(task=> (
                        <li key={task._id}>
                            {task.name}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    // render後に一度だけ走る処理
    componentDidMount() {
        // TODO: httpHelperに移動させたい
        fetch("http://localhost:4000/tasks", {mode: "cors"})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        tasks: result
                    });
                },
                // コンポーネント内のバグによる例外を隠蔽しないため、ここでエラーハンドリングすることが重要
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // render後に毎回必ず走る処理（レイアウトを変更するような処理→render→これ）
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    // componentが破棄される時に走る処理（画面遷移時とか）
    componentWillUnmount() {
    }

}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);