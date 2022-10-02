import { ReactElement } from 'react'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

// See https://zenn.dev/hisho/articles/fe9f4ec4a8e691
type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
  <div className="text-nice-gray font-extralight ">
    <Navbar />
    {children}
    <Footer />
  </div>
)
