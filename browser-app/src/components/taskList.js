import './taskList.css'
import React from 'react'

export default function TaskList (props) {
  return (
    <ul>
      {props.tasks.map(task => (
        <li key={task._id}>
          <label className='clickableLabel' onClick={() => props.taskLabelTapped(task)}>{task.name}</label>
        </li>
      ))}
    </ul>
  )
}
