/// <reference types="react-scripts" />

interface Task {
  _id: string
  name: string
  description: string
  created_date: Date
  __v: number
}

interface TaskListProps {
  tasks: Task[],
  taskLabelTapped: (task: Task) => void
}

interface CreateNewTaskProps {
  formTextValue: string
  formTextChanged: (event: any) => void
  submitButtonTapped: () => void
}

interface TaskDetailProps {
  _id: string
  name: string
  description: string
  created_date: Date
  __v: number
  updateSelectedTask: (taskId: string, taskName: string) => void
  deleteSelectedTask: (taskId: string) => void
}
