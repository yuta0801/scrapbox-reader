import { GetStaticProps, GetStaticPaths } from 'next'

type Props = {
  date: number
  content: {
    lines: Array<{
      id: string
      text: string
    }>
  }
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const project = encodeURIComponent(ctx.params.project as string)
  const page = encodeURIComponent(ctx.params.page as string)
  const url = `https://scrapbox.io/api/pages/${project}/${page}`
  const content = await fetch(url).then(res => res.json())

  return {
    props: {
      date: Date.now(),
      content,
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

const Page = (props: Props) => {
  if (!props.content) return <>loading...</>

  const date = new Date(props.date)

  return (
    <>
      generated at <time>{date.toLocaleString()}</time>
      <main>
        {props.content.lines.map(line => (
          <p style={{ whiteSpace: 'pre' }} key={line.id}>
            {line.text}
          </p>
        ))}
      </main>
    </>
  )
}

export default Page
