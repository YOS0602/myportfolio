import { render, screen } from '@testing-library/react'
import { Profile } from './profile'

it('should contain profile image', () => {
  render(<Profile />)
  expect(
    screen.getByRole('img', { name: 'YOS0602 profile image' })
  ).toBeInTheDocument()
})

it('should contain github link', () => {
  render(<Profile />)
  expect(screen.getByRole('link', { name: 'github-link' })).toBeInTheDocument()
})

it('should contain qiita image', () => {
  render(<Profile />)
  expect(screen.getByRole('img', { name: 'Qiita logo' })).toBeInTheDocument()
})

it('should contain qiita link', () => {
  render(<Profile />)
  expect(screen.getByRole('link', { name: 'qiita-link' })).toBeInTheDocument()
})
