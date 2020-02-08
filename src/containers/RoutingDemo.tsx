import React, { useContext, useCallback } from 'react'
import { observer } from 'mobx-react'

import { StoreContext } from '../App'

const RoutingDemo = observer(() => {
  const store = useContext(StoreContext)
  const routingStore = store.routingStore
  const pathname = routingStore.location.pathname
  const history = routingStore.history

  const goBack = useCallback(() => {
    history.push('/')
  }, [history])

  const sayWow = useCallback(() => {
    history.push(`${pathname}/wow`)
  }, [history, pathname])

  const restoreSanity = useCallback(() => {
    history.push('/routing-demo')
  }, [history])

  return (
    <>
      <div data-testid="pathname">{pathname}</div>
      <div>
        <button onClick={sayWow}>Such URI</button>
      </div>
      <div>
        <button onClick={restoreSanity}>Restore Sanity</button>
      </div>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  )
})

export default RoutingDemo
