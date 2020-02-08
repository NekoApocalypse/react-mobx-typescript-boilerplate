import React from 'react'
import { observable } from 'mobx'
import { render, fireEvent } from '@testing-library/react'
import { RouterStore } from 'mobx-react-router'
import RoutingDemo from './RoutingDemo'

import { StoreContext } from '../App'
import setupRoutingStore from '../utils/setupRoutingStore'

describe('Test RoutingDemo component', () => {
  let mockStore: any
  beforeEach(() => {
    const routingStore = new RouterStore()
    setupRoutingStore(routingStore)
    routingStore.history.push('/routing-demo')
    mockStore = observable({
      routingStore,
    })
  })
  it('Shows curretn location', () => {
    const { getByTestId } = render(
      <StoreContext.Provider value={mockStore}>
        <RoutingDemo />
      </StoreContext.Provider>
    )
    const pathnameElement = getByTestId('pathname')
    expect(pathnameElement).toHaveTextContent(mockStore.routingStore.location.pathname)
  })
  it('Changes location', () => {
    const { getByText } = render(
      <StoreContext.Provider value={mockStore}>
        <RoutingDemo />
      </StoreContext.Provider>
    )
    const wowButton = getByText('Such URI')
    const resetButton = getByText('Restore Sanity')
    const backButton = getByText('Go Back')
    const currentPath = mockStore.routingStore.location.pathname
    fireEvent.click(wowButton)
    expect(mockStore.routingStore.location.pathname).toBe(`${currentPath}/wow`)
    fireEvent.click(resetButton)
    expect(mockStore.routingStore.location.pathname).toBe(`/routing-demo`)
    fireEvent.click(backButton)
    expect(mockStore.routingStore.location.pathname).toBe(`/`)
  })
})
