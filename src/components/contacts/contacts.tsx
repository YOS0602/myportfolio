import Link from 'next/link'

export const Contacts = (): JSX.Element => {
  return (
    <div>
      <p>ご連絡はこちらまで</p>
      <div className="flex flex-wrap justify-center items-center my-4 md:my-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path
            fillRule="evenodd"
            d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"
          ></path>
        </svg>
        <Link href="mailto:yoshitaka.t.biz@gmail.com">
          <a className="px-4 text-blue-400 hover:text-blue-600">yoshitaka.t.biz@gmail.com</a>
        </Link>
      </div>
    </div>
  )
}
