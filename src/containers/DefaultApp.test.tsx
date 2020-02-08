import React from 'react'
import { render } from '@testing-library/react'
import App from './DefaultApp'

describe('Test default app', () => {
  it('Renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })
})
