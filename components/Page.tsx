import { Page as PageType } from '@progfay/scrapbox-parser'
import { Block } from './Block'

export const Page = (props: { blocks: PageType }) => (
  <div className="page">
    {props.blocks.map((block, i) => (
      <Block key={i} {...block} />
    ))}
  </div>
)
