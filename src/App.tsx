import React from 'react'
import { observer } from 'mobx-react'
import { Router, Switch, Route } from 'react-router-dom'

import DefaultApp from './components/DefaultApp'
import RoutingDemo from './containers/RoutingDemo'
import RootStore from './stores/RootStore'
import setupRoutingStore from './utils/setupRoutingStore'

const rootStore = new RootStore()
const history = setupRoutingStore(rootStore.routingStore)

export const StoreContext = React.createContext<RootStore | any>(rootStore)

const App = observer(() => {
  return (
    <Router history={history}>
      <StoreContext.Provider value={rootStore}>
        <Switch>
          <Route path="/routing-demo" component={RoutingDemo} />
          <Route path="/" exact component={DefaultApp} />
          <Route path="/">
            <div>Page not found.</div>
          </Route>
        </Switch>
      </StoreContext.Provider>
    </Router>
  )
})

export default App
