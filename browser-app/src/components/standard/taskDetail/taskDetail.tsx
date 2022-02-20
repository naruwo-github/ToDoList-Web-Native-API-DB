import React, { useState } from 'react'
import styled from 'styled-components'

const TaskDetailFrame = styled.div`
  background-color: bisque;
  width: 100%;
`

export default function TaskDetail (props: TaskDetailProps) {
  const [formTextValue, setFormTextValue] = useState(props.name)

  function handleInputChange (event: any) {
    const value = event.target.value
    setFormTextValue(value)
  }

  return (
    <TaskDetailFrame>
      <div>
        <h2>Selected Task Detail</h2>
      </div>
      <div>
        <p>_id: {props._id}</p>
        <p>name: {props.name}</p>
        <p>description: {props.description}</p>
        <p>created_date: {props.created_date}</p>
        <p>__v: {props.__v}</p>
      </div>
      <div>
        <label>
          Update this name:
          <input
            type="text"
            placeholder="New Task Name"
            onChange={handleInputChange}
          />
          <button
            onClick={() => props.updateSelectedTask(props._id, formTextValue)}
          >
            Submit
          </button>
        </label>
        <button
          onClick={() => props.deleteSelectedTask(props._id)}
        >
          Delete this!
        </button>
      </div>
    </TaskDetailFrame>
  )
}
