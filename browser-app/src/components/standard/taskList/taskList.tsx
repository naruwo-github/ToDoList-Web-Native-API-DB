import React from 'react'
import styled from 'styled-components'

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

const ClickableLabel = styled.td`
  color: darkblue;
  &:hover {
    font-size: 15px;
    color: blue;
  }
  &:active {
    font-size: 14px;
    color: darkblue;
  }
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
            <ClickableLabel
              onClick={() => taskLabelTapped(task)}
            >
              {task.name}
            </ClickableLabel>
          </tr>
        )}
        </tbody>
      </table>
    </TaskListFrame>
  )
}
