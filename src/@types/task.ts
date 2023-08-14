type StepStatus = 'completa' | 'pendente' | 'ignorada'

type Step = {
  _id?: string
  name: string
  status: StepStatus
  create_at: Date
  update_at: Date
}

type Task = {
  _id: string
  title: string
  description: string
  steps: Step[]
}

type TaskItem = {
  _id: string
  title: string
  complete: number
  pending: number
  ignored: number
}

export type { Step, StepStatus, Task, TaskItem }
