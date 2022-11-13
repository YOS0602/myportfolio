import { useWorksModal } from '../../hooks/useWorksModal'
import Image from 'next/image'
import Link from 'next/link'
import { WorksModal } from './worksModal'

// image See https://zenn.dev/nbr41to/articles/365e8105efa448

export const Works = (): JSX.Element => {
  const { showWorksModal, openModal } = useWorksModal()
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {worksData.map((w) => (
        <div
          key={w.id}
          className="card my-2 xl:my-8 mx-2 p-4 bg-white border-2 border-zinc-200 hover:border-c4 hover:animate-pulse w-full sm:w-2/3 lg:w-5/12 min-h-min cursor-pointer"
          onClick={openModal}
        >
          <div className="icon relative mx-auto w-32 h-24 md:w-48 md:h-36">
            <Image
              src={w.imageSrc}
              alt={w.imageAlt}
              layout="fill"
              objectFit="contain"
              className="text-center"
            />
          </div>
          <div className="title mt-4 text-base">{w.title}</div>
        </div>
      ))}
      <div>{`showWorksModal: ${showWorksModal}`}</div>
      <WorksModal />
    </div>
  )
}

const worksData = [
  {
    id: 1,
    imageSrc: '/img/undraw_factory_dy-0-a.svg',
    imageAlt: 'factory',
    title: (
      <p>
        DRリソース管理
        <br />
        メリットオーダー作成システム
      </p>
    ),
    description: `DRリソースを一元管理し、DR計画を作成し他システムに連係することでリソースに対し指令する。実績の収集および精算評価の見える化も行う。
    電力市場価格やリソースに対するDR報酬単価に基づいてリソースや指令量の組み合わせを調整し、最も経済的にDRを実施することを目指す。`,
    skills: ['Express', 'Node.js', 'Azure'],
  },
  {
    id: 2,
    imageSrc: '/img/undraw_survey_05s5.svg',
    imageAlt: 'survey',
    title: '[医師・患者向け] 電子質問票サービス',
    description: `特定の疾患を持つ患者に対する質問票を電子化し、回答集計の手間軽減・患者ごとの回答推移の見える化・他患者との比較をオンラインで実現させた。`,
    skills: ['Vue.js', 'NestJS', 'GraphQL', 'Auth0', 'Node.js', 'Azure'],
  },
  {
    id: 3,
    imageSrc: '/img/undraw_visual_data_re_mxxo.svg',
    imageAlt: 'visualize_data',
    title: (
      <p>
        [医師向け] 患者のバイタルデータ
        <br />
        環境情報収集&見える化サービス
      </p>
    ),
    description: (
      <div className="">
        <ul className="list-disc">
          <li>
            <p>電力スマートメータから取得できる電力使用量</p>
          </li>
          <li>
            <p>
              <Link href="https://www.fitbit.com/global/jp/home">
                <a className="text-blue-400 hover:text-blue-600">Fitbit</a>
              </Link>
              で収集できるバイタルデータ
            </p>
          </li>
          <li>
            <p>
              <Link href="https://www.fitbit.com/global/jp/home">
                <a className="text-blue-400 hover:text-blue-600">ネコリコ</a>
              </Link>
              IoTデバイスで取得できる環境データ
            </p>
          </li>
          <li>
            <p>食事記録アプリによって収集された飲食データ</p>
          </li>
        </ul>
        <p>上記データを患者の同意のもと収集し見える化する。</p>
      </div>
    ),
    skills: ['Vue.js', 'Express', 'API', 'Auth0', 'Node.js', 'Azure'],
  },
  {
    id: 4,
    imageSrc: '/img/undraw_hello_re_3evm.svg',
    imageAlt: 'hello_at_workplace',
    title: '[業務外] フリーアドレス座席管理サービス',
    description: `フリーアドレス座席表管理サービス。「誰がどこにいるか分からない」課題を解消するため発足。もう1つの目的は若手社員がスクラム開発と流行りの技術に触れる場をつくること。`,
    skills: ['React', 'Express', 'Node.js', 'cognitive', 'Azure'],
  },
]
