import './index.css';

import { TopItem } from './types'

interface TopRowProps {
  topItem: TopItem;
}

const TopRow = ({ topItem }: TopRowProps) => (
  <div className="top-row">
    <div className="top-row-title">
      <span className="top-row-place">{topItem.id}</span>
      <img src={topItem.image} alt={topItem.title} />
      <span>{topItem.title}</span>
    </div>

    <div className="top-row-value">
      <span>{topItem.value}</span>
      {topItem.arrowType === 'up' ? (
        <span>U</span>
      ) : (
        <span>D</span>
      )}
    </div>
  </div>
)

interface TopTableProps {
  top: TopItem[];
}

const TopTable = ({ top }: TopTableProps) => {
  return (
    <div className="top-table">
      {top.map((topItem) => (
        <TopRow key={topItem.id} topItem={topItem} />
      ))}
    </div>
  )
}

export default TopTable