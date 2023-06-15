import { Contacts } from '@/components/contacts/contacts'
import { render } from '@testing-library/react'

test('should display my email', () => {
  const { getByText } = render(<Contacts />)
  expect(getByText('yoshitaka.t.biz@gmail.com')).toBeTruthy()
})
