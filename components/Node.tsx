import React from 'react'
import type {
  Node as NodeType,
  QuoteNode as QuoteNodeType,
  HelpfeelNode as HelpfeelNodeType,
  StrongImageNode as StrongImageNodeType,
  StrongIconNode as StrongIconNodeType,
  StrongNode as StrongNodeType,
  FormulaNode as FormulaNodeType,
  DecorationNode as DecorationNodeType,
  CodeNode as CodeNodeType,
  BlankNode as BlankNodeType,
  ImageNode as ImageNodeType,
  LinkNode as LinkNodeType,
  GoogleMapNode as GoogleMapNodeType,
  IconNode as IconNodeType,
  HashTagNode as HashTagNodeType,
  PlainNode as PlainNodeType,
} from '@progfay/scrapbox-parser'
import { LinkNode } from './LinkNode'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

export const Node = (props: NodeType) => {
  switch (props.type) {
    case 'quote':
      return <Quote {...props} />
    case 'helpfeel':
      return <Helpfeel {...props} />
    case 'strongImage':
      return <StrongImage {...props} />
    case 'strongIcon':
      return <StrongIcon {...props} />
    case 'strong':
      return <Strong {...props} />
    case 'formula':
      return <Formula {...props} />
    case 'decoration':
      return <Decoration {...props} />
    case 'code':
      return <Code {...props} />
    case 'blank':
      return <Blank {...props} />
    case 'link':
      return <Link {...props} />
    case 'image':
      return <Image {...props} />
    case 'googleMap':
      return <GoogleMap {...props} />
    case 'icon':
      return <Icon {...props} />
    case 'hashTag':
      return <HashTag {...props} />
    case 'plain':
      return <Plain {...props} />
  }
}

const Quote = (props: QuoteNodeType) => (
  <blockquote className="quote">
    <span className="tag">{'>'}</span>
    {props.nodes.map(node => (
      <Node {...node} />
    ))}
  </blockquote>
)

const Helpfeel = (props: HelpfeelNodeType) => (
  <code className="helpfeel">
    <span className="prefix">?</span>{' '}
    <span className="entry">{props.text}</span>
  </code>
)

const StrongImage = (props: StrongImageNodeType) => (
  <a href={props.src} rel="noopener noreferrer" target="_blank">
    <img src={props.src} className="strong-image" />
  </a>
)

const StrongIcon = (props: StrongIconNodeType) => {
  const { project } = useRouter().query
  const path =
    props.pathType === 'relative' ? `/${project}/${props.path}` : props.path
  const name = path.split('/')[2]

  return (
    <NextLink href="/[project]/[page]" as={`${path}`}>
      <a className="link icon">
        <img
          src={`https://scrapbox.io/api/pages${path}/icon`}
          alt={name}
          title={name}
          className="icon strong-icon"
        />
      </a>
    </NextLink>
  )
}

const Strong = (props: StrongNodeType) => (
  <strong>
    {props.nodes.map(node => (
      <Node {...node} />
    ))}
  </strong>
)

const Formula = (props: FormulaNodeType) => (
  <span className="formula">{props.formula}</span>
)

const Decoration = (props: DecorationNodeType) => (
  <span className="deco">
    <span className={props.decos.map(deco => `deco-${deco}`).join(' ')}>
      {props.nodes.map(node => (
        <Node {...node} />
      ))}
    </span>
  </span>
)

const Code = (props: CodeNodeType) => (
  <code className="code">
    <span className="backquote"> </span>
    <span>{props.text}</span>
    <span className="backquote"> </span>
  </code>
)

const Blank = (props: BlankNodeType) => (
  <span className="blank">{props.text}</span>
)

const Link = (props: LinkNodeType) => <LinkNode {...props} />

const Image = (props: ImageNodeType) => (
  <a
    href={props.link || props.src}
    className={props.link ? 'link' : null}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src={props.src} className="image" />
  </a>
)

const GoogleMap = (props: GoogleMapNodeType) => (
  <a
    href={props.url}
    rel="noopener noreferrer"
    target="_blank"
    className="link"
  >
    {props.place}
  </a>
)

const Icon = (props: IconNodeType) => {
  const { project } = useRouter().query
  const path =
    props.pathType === 'relative' ? `/${project}/${props.path}` : props.path
  const name = path.split('/')[2]

  return (
    <NextLink href="/[project]/[page]" as={`${path}`}>
      <a className="link icon">
        <img
          src={`https://scrapbox.io/api/pages${path}/icon`}
          alt={name}
          title={name}
          className="icon"
        />
      </a>
    </NextLink>
  )
}

const HashTag = (props: HashTagNodeType) => {
  const { project } = useRouter().query
  const href = `/${project}/${props.href}`

  return (
    <NextLink href="/[project]/[page]" as={href}>
      <a type="hashTag" className="page-link">
        #{props.href}
      </a>
    </NextLink>
  )
}

const Plain = (props: PlainNodeType) => <>{props.text}</>
