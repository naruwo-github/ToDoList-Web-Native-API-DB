import React from "react";

export default function CreateNewTask(props) {
    return (
        <label>
            Create new task:
            <input type="text" value={props.formTextValue} placeholder="Task Name" onChange={props.formTextChanged} />
            <button onClick={props.submitButtonTapped}>Submit</button>
        </label>
    );
}