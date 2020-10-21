import { GetStaticProps, GetStaticPaths } from 'next'
import { parse, Page as PageType } from '@progfay/scrapbox-parser'
import { Page } from '../../components/Page'

type Props = {
  date: number
  content: PageType
  exists: boolean
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const project = encodeURIComponent(ctx.params.project as string)
  const page = encodeURIComponent(ctx.params.page as string)
  const url = `https://scrapbox.io/api/pages/${project}/${page}/text`
  const response = await fetch(url)
  const content: string = await response.text()

  return {
    props: {
      date: Date.now(),
      content: parse(content),
      exists: response.ok,
    },
    revalidate: 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

const View = (props: Props) => {
  if (!props.content) return <>loading...</>
  if (!props.exists) return <>This is an empty page</>

  return (
    <>
      generated at <time>{new Date(props.date).toLocaleString()}</time>
      <Page blocks={props.content} />
    </>
  )
}

export default View
