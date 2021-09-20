import './taskDetail.css'
import React, {useState} from "react";

export default function TaskDetail(props) {
    const [formTextValue, setFormTextValue] = useState(props.task.name);

    function handleInputChange(event) {
        const value = event.target.value;
        setFormTextValue(value);
    }

    function updateTaskName() {
        // TODO: putの処理を追記するor親コンポーネントから関数を渡す
        console.log(formTextValue);
    }

    return (
        <div className="detailBox">
            <div>
                <h2>Selected Task Detail</h2>
            </div>
            <div>
                <p>_id: {props.task._id}</p>
                <p>name: {props.task.name}</p>
                <p>Created_date: {props.task.Created_date}</p>
                <p>__v: {props.task.__v}</p>
            </div>
            <div>
                <label>
                    Update this task:
                    <input type="text" placeholder="New Task Name" onChange={handleInputChange} />
                    <button onClick={updateTaskName}>Submit</button>
                </label>
                <button onClick={() => props.deleteSelectedTask(props.task._id)}>Delete this!</button>
            </div>
        </div>
    );
}