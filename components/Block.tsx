import React from 'react'
import {
  Block as BlockType,
  Title as TitleType,
  CodeBlock as CodeBlockType,
  Table as TableType,
  Line as LineType,
} from '@progfay/scrapbox-parser'

export const Block = (props: BlockType) => {
  switch (props.type) {
    case 'title':
      return <Title {...props} />
    case 'codeBlock':
      return <CodeBlock {...props} />
    case 'table':
      return <Table {...props} />
    case 'line':
      return <Line {...props} />
  }
}

const Title = (props: TitleType) => <h1>{props.text}</h1>

const CodeBlock = (props: CodeBlockType) => null

const Table = (props: TableType) => null

const Line = (props: LineType) => null
