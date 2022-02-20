import React from 'react'
import { StyledClickableLabel, StyledTaskListFrame } from './style'

export default function TaskList (props: TaskListProps) {
  return (
    <StyledTaskListFrame>
      <table>
        <thead>
        <tr>
          <th>_id</th>
          <th>name</th>
        </tr>
        </thead>
        <tbody>
        {props.tasks.map(task =>
          <tr key={task._id}>
            <td>{task._id}</td>
            <StyledClickableLabel
              onClick={() => props.taskLabelTapped(task)}
            >
              {task.name}
            </StyledClickableLabel>
          </tr>
        )}
        </tbody>
      </table>
    </StyledTaskListFrame>
  )
}
