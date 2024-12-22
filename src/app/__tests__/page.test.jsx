import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../about/page'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<About />)
 
    const heading = screen.getByRole('technology ')
 
    expect(heading).toBeInTheDocument()
  })
})