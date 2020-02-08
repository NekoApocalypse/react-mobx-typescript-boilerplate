import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { History, createBrowserHistory } from 'history'

export default (routingStore: RouterStore): History => {
  const browserHistory = createBrowserHistory()
  const history = syncHistoryWithStore(browserHistory, routingStore)
  return history
}
