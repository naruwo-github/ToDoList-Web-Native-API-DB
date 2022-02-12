import React from 'react'
import styled from 'styled-components'
import './taskList.css'

interface Task {
  _id: string
  name: string
  description: string
  created_date: Date
  __v: number
}

const TaskListFrame = styled.div`
  width: 100%;
`

export default function TaskList ({
  tasks,
  taskLabelTapped
}: {
  tasks: Task[],
  taskLabelTapped: (task: Task) => void
}) {
  return (
    <TaskListFrame>
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
    </TaskListFrame>
  )
}
