import React from 'react'
import type {
  LineNode as NodeType,
  QuoteNode as QuoteNodeType,
  HelpfeelNode as HelpfeelNodeType,
  StrongImageNode as StrongImageNodeType,
  StrongIconNode as StrongIconNodeType,
  StrongNode as StrongNodeType,
  FormulaNode as FormulaNodeType,
  DecorationNode as DecorationNodeType,
  CodeNode as CodeNodeType,
  BlankNode as BlankNodeType,
  InternalLinkNode as InternalLinkNodeType,
  ExternalLinkNode as ExternalLinkNodeType,
  ImageNode as ImageNodeType,
  GoogleMapNode as GoogleMapNodeType,
  IconNode as IconNodeType,
  HashTagNode as HashTagNodeType,
  PlainNode as PlainNodeType,
} from '@progfay/scrapbox-parser'

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

const Quote = (props: QuoteNodeType) => null

const Helpfeel = (props: HelpfeelNodeType) => null

const StrongImage = (props: StrongImageNodeType) => null

const StrongIcon = (props: StrongIconNodeType) => null

const Strong = (props: StrongNodeType) => null

const Formula = (props: FormulaNodeType) => null

const Decoration = (props: DecorationNodeType) => null

const Code = (props: CodeNodeType) => null

const Blank = (props: BlankNodeType) => null

const Link = (props: InternalLinkNodeType | ExternalLinkNodeType) => null

const Image = (props: ImageNodeType) => null

const GoogleMap = (props: GoogleMapNodeType) => null

const Icon = (props: IconNodeType) => null

const HashTag = (props: HashTagNodeType) => null

const Plain = (props: PlainNodeType) => <>{props.text}</>
