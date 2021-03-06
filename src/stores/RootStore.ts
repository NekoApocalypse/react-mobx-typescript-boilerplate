import { RouterStore } from 'mobx-react-router'
import TodoStore from './TodoStore'

class RootStore {
  todoStore: TodoStore
  routingStore: RouterStore
  constructor() {
    // initiates other stores
    this.todoStore = new TodoStore()
    this.routingStore = new RouterStore()
  }
}

export default RootStore
