import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/components/layout/layout'
import { Profile } from '@/components/profile/profile'
import { Skills } from '@/components/skills/skills'
import { Qualifications } from '@/components/qualifications/qualifications'
import { Works } from '@/components/works/works'

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-cbg text-nice-gray py-20">
      <div className="container text-center text-lg">
        <Head>
          <title>YOS0602</title>
          <meta name="description" content="portfolio of YOS0602" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="my-10 md:my-44">
          <h1
            id="section-profile"
            className="text-4xl md:text-6xl pt-20 pb-4 md:pb-20"
          >
            Profile
          </h1>
          <Profile />
        </div>

        <div className="my-10 md:my-44">
          <h1
            id="section-skills"
            className="text-4xl md:text-6xl pt-20 pb-4 md:pb-20"
          >
            Skills
          </h1>
          <Skills />
        </div>

        <div className="my-10 md:my-44">
          <h1
            id="section-qualifications"
            className="text-4xl md:text-6xl pt-20 pb-4 md:pb-20"
          >
            Qualifications
          </h1>
          <Qualifications />
        </div>

        <div className="my-10 md:my-44">
          <h1
            id="section-works"
            className="text-4xl md:text-6xl pt-20 pb-4 md:pb-20"
          >
            Works
          </h1>
          <Works />
        </div>
      </div>
    </div>
  )
}

/**
 * NavBarとFooterを表示するよう設定する。
 */
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
