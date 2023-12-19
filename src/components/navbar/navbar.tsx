import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'

export const Navbar = (): JSX.Element => {
  // scroll See https://stackoverflow.com/questions/68589788/nextjs-link-to-scroll-to-a-section-in-same-page
  const navMenus = [
    { href: '#section-profile', name: 'Profile' },
    { href: '#section-skills', name: 'Skills' },
    { href: '#section-qualifications', name: 'Qualifications' },
    { href: '#section-works', name: 'Works' },
    { href: '#section-contacts', name: 'Contacts' },
  ]

  const [showNavbar, setShowNavbar] = useState<boolean>(false) // ハンバーガーメニューを表示するかしないか
  const [openNavbar, setOpenNavbar] = useState<boolean>(false) // ハンバーガメニューを開くか
  const aTagRef = useRef<HTMLAnchorElement>(null)

  /**
   * Navbar上のボタンをクリックされたら、ハンバーガーメニューの表示/非表示を切り替えるためのstateを反転させる
   */
  const onclickNavbarButton = () => {
    setOpenNavbar(!openNavbar)
  }

  /**
   * ハンバーガーメニューを閉じるためにstateを更新する
   */
  const closeNavbar = () => {
    if (openNavbar) setOpenNavbar(false)
  }

  // 画面横幅を取得
  const { width } = useWindowSize()

  // コンポーネント作成、更新時に画面横幅サイズを取得して、ハンバーガーメニューを出すか分岐
  useEffect(() => {
    // 横幅が十分あれば、リンクをハンバーガメニューではなくflexで表示する
    if (1280 <= width) {
      setShowNavbar(false)
      setOpenNavbar(false)
    } else {
      setShowNavbar(true)
    }
  }, [width])

  const NavList: JSX.Element = (
    <div className="flex flex-col flex-wrap xl:flex-row justify-center">
      {navMenus.map((menu) => (
        <Link legacyBehavior href={menu.href} key={menu.name} scroll={false}>
          <a
            ref={aTagRef}
            className="px-3 my-8 xl:my-0 hover:underline decoration-c2 hover:decoration-4"
            onClick={closeNavbar}
          >
            {menu.name}
          </a>
        </Link>
      ))}
    </div>
  )

  // メニューオープン時はスクリーンの大きさに縦幅をfitさせて縦スクロールをできるようにし、透過させる
  return (
    <header
      className={`fixed w-full ${
        openNavbar ? 'h-screen opacity-95' : ''
      } text-center font-bold bg-c1 text-c5 text-3xl py-4 z-20 overflow-y-scroll`}
    >
      {showNavbar ? (
        <div>
          <div className="mr-4 text-right">
            <span
              className="p-2 cursor-context-menu"
              onClick={onclickNavbarButton}
            >
              {openNavbar ? 'X' : '三'}
            </span>
          </div>
          {openNavbar && NavList}
        </div>
      ) : (
        NavList
      )}
    </header>
  )
}
