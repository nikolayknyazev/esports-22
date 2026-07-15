import { ElementType } from "react";

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
  icon: any; // убрать подумаьт
  title: string;
  specialDate: string;
}