import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
  _id: string
  name: string
  description: string
  created_date: Date
  __v: number
  updateSelectedTask: (taskId: string, taskName: string) => void
  deleteSelectedTask: (taskId: string) => void
}

const DetailBox = styled.div`
  background-color: bisque;
  width: 100%;
`

export default function TaskDetail (props: Props) {
  const [formTextValue, setFormTextValue] = useState(props.name)

  function handleInputChange (event: any) {
    const value = event.target.value
    setFormTextValue(value)
  }

  return (
    <DetailBox>
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
    </DetailBox>
  )
}
