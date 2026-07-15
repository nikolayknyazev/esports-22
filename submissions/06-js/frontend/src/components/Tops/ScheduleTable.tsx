import './index.css';

import { FaAccessibleIcon } from 'react-icons/fa';

import { ScheduleItem } from './types'

interface ScheduleRowProps {
  item: ScheduleItem;
}

const ScheduleRow = ({ item }: ScheduleRowProps) => (
  <div className="schedule-row">
    {/* {item.icon} */}
    <>
      <FaAccessibleIcon />
    </>
    <div className="schedule-row-info">
      <span>{item.title}</span>
      <span>{item.specialDate}</span>
    </div>
  </div>
)

interface ScheduleTableProps {
  schedule: ScheduleItem[];
}

const ScheduleTable = ({ schedule }: ScheduleTableProps) => {
  return (
    <div className="schedule-table">
      {schedule.map((item) => (
        <ScheduleRow key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ScheduleTable