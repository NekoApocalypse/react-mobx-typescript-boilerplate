import { observable } from 'mobx'

class TodoStore {
  constructor() {
    return
  }

  @observable testValue: string = 'test'

  @observable todos: any[] = []
}

export default TodoStore
