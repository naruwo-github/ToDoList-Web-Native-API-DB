import './taskList.css'
import React from 'react'

export default function TaskList ({ tasks, taskLabelTapped }) {
  return (
    <table>
      <thead>
      <tr>
        <th>_id</th>
        <th>name</th>
      </tr>
      </thead>
      <tbody>
      {tasks.map(task =>
        <tr key={task._id}>
          <td>{task._id}</td>
          <td
            className="clickableLabel"
            onClick={() => taskLabelTapped(task)}
          >
            {task.name}
          </td>
        </tr>
      )}
      </tbody>
    </table>
  )
}
