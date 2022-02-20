import React from 'react'
import { StyledCreateNewTaskFrame } from './style'

export default function CreateNewTask (props: CreateNewTaskProps) {
  return (
    <StyledCreateNewTaskFrame>
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
    </StyledCreateNewTaskFrame>
  )
}
