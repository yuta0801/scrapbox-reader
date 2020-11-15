import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { parse, Page as PageType } from '@progfay/scrapbox-parser'
import { Page } from '../../components/Page'

type Props = {
  date: number
  content: PageType
  exists: boolean
  project: string
  page: string
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
      project: ctx.params.project as string,
      page: ctx.params.page as string,
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

const Title = (props: Props) => (
  <Head>
    <title>
      /{props.project}/{props.page} - Scrapbox Reader
    </title>
  </Head>
)

const View = (props: Props) => {
  if (!props.content)
    return (
      <>
        <Title {...props} />
        loading...
      </>
    )
  if (!props.exists)
    return (
      <>
        <Title {...props} />
        This is an empty page
      </>
    )

  return (
    <>
      <Title {...props} />
      generated at <time>{new Date(props.date).toLocaleString()}</time>
      <Page blocks={props.content} />
    </>
  )
}

export default View
