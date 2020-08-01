import { GetStaticProps, GetStaticPaths } from 'next'
import { parse, Page as PageType } from '@progfay/scrapbox-parser'
import { Page } from '../../components/Page'

type Props = {
  date: number
  content: PageType
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const project = encodeURIComponent(ctx.params.project as string)
  const page = encodeURIComponent(ctx.params.page as string)
  const url = `https://scrapbox.io/api/pages/${project}/${page}/text`
  const content: string = await fetch(url).then(res => res.text())

  return {
    props: {
      date: Date.now(),
      content: parse(content),
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

  return (
    <>
      generated at <time>{new Date(props.date).toLocaleString()}</time>
      <Page blocks={props.content} />
    </>
  )
}

export default View
