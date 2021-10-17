import React from 'react'
import styles from './createNewTask.module.css'

interface Props {
  formTextValue: string
  formTextChanged: (event: any) => void
  submitButtonTapped: () => void
}

export default function CreateNewTask (props: Props) {
  return (
    <div className={styles.frame}>
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
    </div>
  )
}
