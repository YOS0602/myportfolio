import Head from 'next/head'
import Image from 'next/image'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/components/layout/layout'

const Home: NextPageWithLayout = () => {
  return (
    <div className="container text-center bg-cbg">
      <Head>
        <title>YOS0602</title>
        <meta name="description" content="portfolio of YOS0602" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className="">
        Get started by editing <code className="">pages/index.tsx</code>
      </p>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
