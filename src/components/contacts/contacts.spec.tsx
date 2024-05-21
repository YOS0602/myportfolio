import { Contacts } from '@/components/contacts/contacts'
import { render } from '@testing-library/react'

it('should display message', () => {
  const { getByText } = render(<Contacts />)
  expect(getByText('ご連絡はこちらまで')).toBeInTheDocument()
})

// TODO テストを書く
// # フォーム内容
// - 名前
// - 連絡先
// - 件名
// - 本文

// REF https://zenn.dev/hayato94087/articles/409ce06564122d

it('renders all form fields', () => {
  const { getByText } = render(<Contacts />)

  expect(getByText(/name/i)).toBeInTheDocument()
  expect(getByText(/contact/i)).toBeInTheDocument()
  expect(getByText(/subject/i)).toBeInTheDocument()
  expect(getByText(/message/i)).toBeInTheDocument()
})
