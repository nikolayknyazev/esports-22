export type ArrowType = 'up' | 'down' | 'neutral';

export interface TopItem {
  id: number;
  image: string;
  title: string;
  value: string;
  arrowType: ArrowType;
}

export interface ScheduleItem {
  id: number;
  icon: string;
  title: string;
  specialDate: string;
}
