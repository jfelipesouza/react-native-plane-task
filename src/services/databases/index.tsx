import Realm from 'realm'
import { TaskSchema } from './Schemas/TaskSchema'
import { StepSchema } from './Schemas/StepSchema'

export const getRealm = async () =>
  await Realm.open({
    path: 'plane',
    schema: [TaskSchema, StepSchema]
  })
