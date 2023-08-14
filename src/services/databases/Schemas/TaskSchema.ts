import { ObjectSchema, BSON } from 'realm'
import { TASK_TABLE_NAME } from '../../constants'

export const TaskSchema: ObjectSchema = {
  name: TASK_TABLE_NAME,
  properties: {
    _id: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    steps: { type: 'list', objectType: 'Steps' },
    create_at: { type: 'date', optional: true, default: new Date() },
    update_at: { type: 'date', optional: true, default: new Date() }
  },
  primaryKey: '_id'
}
