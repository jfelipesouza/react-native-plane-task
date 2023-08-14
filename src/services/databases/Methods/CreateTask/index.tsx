import uuid from 'react-native-uuid'
import { getRealm } from '../..'
import { Step, Task } from '../../../../@types/task'
import { TASK_TABLE_NAME } from '../../../constants'

export const createNewTask = async (
  title: string,
  description: string,
  steps: Step[]
) => {
  const realm = await getRealm()
  try {
    const task = realm.write(() => {
      return realm.create<Task>(TASK_TABLE_NAME, {
        title,
        description,
        steps,
        _id: uuid.v4().toString()
      })
    })
    console.log(task)
  } catch (error) {
    console.log('error:', error)
  } finally {
    realm.close()
  }
}
