import { STEP_TABLE_NAME } from '../../constants'
import Realm, { BSON } from 'realm'

const StepSchema: Realm.ObjectSchema = {
  name: STEP_TABLE_NAME,
  embedded: true,

  properties: {
    name: { type: 'string' },
    status: { type: 'string', default: 'pendente' },
    create_at: { type: 'date', optional: true, default: new Date() },
    update_at: { type: 'date', optional: true, default: new Date() }
  }
}

export { StepSchema }
