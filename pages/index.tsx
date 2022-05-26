import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Index = () => {
  const router = useRouter()

  // Share Target support
  useEffect(() => {
    if (!router.isReady) return

    try {
      const params = new URL(location.href).searchParams
      const open = params.get('url') || params.get('text')
      if (!open) return
      const to = new URL(open)
      if (to.host !== 'scrapbox.io') return
      router.push(to.pathname)
    } catch {
      // ignore invalid url error
    }
  }, [router.isReady])

  return <h1>Scrapbox Reader</h1>
}

export default Index
