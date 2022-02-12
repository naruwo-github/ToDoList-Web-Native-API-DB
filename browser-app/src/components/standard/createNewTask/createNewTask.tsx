import React from 'react'
import styled from 'styled-components'

interface Props {
  formTextValue: string
  formTextChanged: (event: any) => void
  submitButtonTapped: () => void
}

const Frame = styled.div`
  width: 100%;
  height: 50px;
  display: table-cell;
  vertical-align: middle;
`

export default function CreateNewTask (props: Props) {
  return (
    <Frame>
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
    </Frame>
  )
}
