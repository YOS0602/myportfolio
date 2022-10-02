import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/components/layout/layout'
import { Profile } from '@/components/profile/profile'

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-cbg text-nice-gray py-52 sm:py-40 md:py-20">
      <div className="container text-center">
        <Head>
          <title>YOS0602</title>
          <meta name="description" content="portfolio of YOS0602" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="my-44">
          <h1 id="section-profile" className="text-4xl md:text-6xl pt-40 md:pt-20">
            Profile
          </h1>
          <Profile />
        </div>
        <h1 id="section-skills" className="text-4xl md:text-6xl pt-40 md:pt-20">
          Skills
        </h1>
        <div className="h-96"></div>
        <h1 id="section-qualifications" className="text-4xl md:text-6xl pt-40 md:pt-20">
          Qualifications
        </h1>
        <div className="h-96"></div>
        <h1 id="section-works" className="text-4xl md:text-6xl pt-40 md:pt-20">
          Works
        </h1>
        <div className="h-96"></div>
        <h1 id="section-contacts" className="text-4xl md:text-6xl pt-40 md:pt-20">
          Contacts
        </h1>
        <div className="h-96"></div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
