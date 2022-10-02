import Link from 'next/link'

export const Navbar = (): JSX.Element => {
  // scroll See https://stackoverflow.com/questions/68589788/nextjs-link-to-scroll-to-a-section-in-same-page
  return (
    <header className="fixed w-full text-center bg-c1 text-c5 py-4 z-40">
      <div className="flex flex-wrap flex-row text-3xl justify-center">
        <Link href="#section-profile" scroll={false}>
          <a className="px-3 hover:underline decoration-c2 hover:decoration-4">Profile</a>
        </Link>
        <Link href="#section-skills" scroll={false}>
          <a className="px-3 hover:underline decoration-c2 hover:decoration-4">Skills</a>
        </Link>
        <Link href="#section-qualifications" scroll={false}>
          <a className="px-3 hover:underline decoration-c2 hover:decoration-4">Qualifications</a>
        </Link>
        <Link href="#section-works" scroll={false}>
          <a className="px-3 hover:underline decoration-c2 hover:decoration-4">Works</a>
        </Link>
        <Link href="#section-contacts" scroll={false}>
          <a className="px-3 hover:underline decoration-c2 hover:decoration-4">Contacts</a>
        </Link>
      </div>
    </header>
  )
}
