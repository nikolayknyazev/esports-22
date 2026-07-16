import './index.css';

import DataCard from './DataCard';
import { mockSchedule, mockTopPlayers, mockTopTeams } from './mockTops';
import ScheduleTable from './ScheduleTable';
import TopTable from './TopTable';

const Tops = () => {
  return (
    <div className="tops">
      <DataCard title="ТОП КОМАНДЫ" linkText="Весь рейтинг">
        <TopTable top={mockTopTeams} />
      </DataCard>

      <DataCard title="ТОП ИГРОКОВ" linkText="Весь рейтинг">
        <TopTable top={mockTopPlayers} />
      </DataCard>

      <DataCard title="РАСПИСАНИЕ" linkText="Все матчи">
        <ScheduleTable schedule={mockSchedule} />
      </DataCard>
    </div>
  );
};

export default Tops;
