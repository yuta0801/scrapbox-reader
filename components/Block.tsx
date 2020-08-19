import React from 'react'
import {
  Block as BlockType,
  Title as TitleType,
  CodeBlock as CodeBlockType,
  Table as TableType,
  Line as LineType,
} from '@progfay/scrapbox-parser'
import { Node } from './Node'

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

const BlockBase = (props: { indent: number; children: React.ReactNode }) => (
  <div style={{ marginLeft: 1.5 * props.indent + 'em' }} className="line">
    {props.children}
  </div>
)

const Title = (props: TitleType) => (
  <BlockBase indent={0}>
    <h1>{props.text}</h1>
  </BlockBase>
)

const CodeBlock = (props: CodeBlockType) => (
  <BlockBase indent={props.indent}>
    <code className="code-block">
      <span className="code-block-start" title={props.fileName}>
        {props.fileName}
      </span>
      <div style={{ marginLeft: '1.5em' }}>{props.content}</div>
    </code>
  </BlockBase>
)

const Table = (props: TableType) => (
  <BlockBase indent={props.indent}>{null}</BlockBase>
)

const Line = (props: LineType) => (
  <BlockBase indent={props.indent}>
    {!props.nodes.length ? (
      <br />
    ) : (
      props.nodes.map((node, i) => <Node key={i} {...node} />)
    )}
  </BlockBase>
)
