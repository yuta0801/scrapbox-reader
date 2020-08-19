import React from 'react'
import type {
  InternalLinkNode as InternalLinkNodeType,
  ExternalLinkNode as ExternalLinkNodeType,
} from '@progfay/scrapbox-parser'
import { useRouter } from 'next/router'
import Link from 'next/link'

export type LinkNodeType = InternalLinkNodeType | ExternalLinkNodeType

export const LinkNode = (props: LinkNodeType) => {
  switch (props.pathType) {
    case 'root':
    case 'relative':
      return <InternalLink {...props} />
    case 'absolute':
      return <ExternalLink {...props} />
  }
}

const InternalLink = (props: InternalLinkNodeType) => {
  const { project } = useRouter().query
  const href =
    props.pathType === 'relative' ? `/${project}/${props.href}` : props.href

  return (
    <Link href="/[project]/[page]" as={href}>
      <a>{props.href}</a>
    </Link>
  )
}

const ExternalLink = (props: ExternalLinkNodeType) => (
  <a href={props.href} rel="noopener noreferrer" target="_blank">
    {props.content || props.href}
  </a>
)
