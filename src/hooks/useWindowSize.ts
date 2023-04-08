// See https://qiita.com/developanda/items/c27843a95c4ae0878fbe
import { useEffect, useState } from 'react'

/**
 * window sizeのwidthとheightをstateとして保持する。画面サイズ変更を検知し、最新の値に更新する。
 * @returns windowSize(width and height)のstate
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      // Unmount時にEventListenerを除去する
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return windowSize
}
