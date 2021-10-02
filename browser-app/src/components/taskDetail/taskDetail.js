import './taskDetail.css'
import React, { useState } from 'react'

export default function TaskDetail (props) {
  const [formTextValue, setFormTextValue] = useState(props.task.name)

  function handleInputChange (event) {
    const value = event.target.value
    setFormTextValue(value)
  }

  return (
    <div className="detailBox">
      <div>
        <h2>Selected Task Detail</h2>
      </div>
      <div>
        <p>_id: {props.task._id}</p>
        <p>name: {props.task.name}</p>
        <p>description: {props.task.description}</p>
        <p>created_date: {props.task.created_date}</p>
        <p>__v: {props.task.__v}</p>
      </div>
      <div>
        <label>
          Update this name:
          <input type="text" placeholder="New Task Name" onChange={handleInputChange}/>
          <button onClick={() => props.updateSelectedTask(props.task._id, formTextValue)}>Submit</button>
        </label>
        <button onClick={() => props.deleteSelectedTask(props.task._id)}>Delete this!</button>
      </div>
    </div>
  )
}
