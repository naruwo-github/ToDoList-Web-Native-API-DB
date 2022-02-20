import React from 'react'
import styled from 'styled-components'

const CreateNewTaskFrame = styled.div`
  width: 100%;
  height: 50px;
  display: table-cell;
  vertical-align: middle;
`

export default function CreateNewTask (props: CreateNewTaskProps) {
  return (
    <CreateNewTaskFrame>
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
    </CreateNewTaskFrame>
  )
}
