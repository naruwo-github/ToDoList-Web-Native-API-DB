import React from 'react'

interface Props {
  formTextValue: string
  formTextChanged: () => {}
  submitButtonTapped: () => {}
}

export default function CreateNewTask (props: Props) {
  return (
    <label>
      Create new task:
      <input
        id="taskNameForm"
        type="text"
        value={props.formTextValue}
        placeholder="Task Name"
        onChange={props.formTextChanged}
      />
      <button onClick={props.submitButtonTapped}>
        Submit
      </button>
    </label>
  )
}
