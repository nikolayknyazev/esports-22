import calendarIcon from '../../pages/main/images/calendar-days.svg';
import donkImage from '../../pages/main/images/donk.png';
import fazeIcon from '../../pages/main/images/faze.png';
import g2Icon from '../../pages/main/images/g2.png';
import m0nesyImage from '../../pages/main/images/m0nesey.png';
import naviIcon from '../../pages/main/images/navi.png';
import ropzImage from '../../pages/main/images/ropz.png';
import sh1roImage from '../../pages/main/images/sh1ro.png';
import swordsIcon from '../../pages/main/images/swords.svg';
import teamSpiritIcon from '../../pages/main/images/team-spirit.png';
import trophyIcon from '../../pages/main/images/trophy.svg';
import vitalityIcon from '../../pages/main/images/vitality.png';
import zywooImage from '../../pages/main/images/zywoo.png';
import { ScheduleItem, TopItem } from './types';

export const mockTopTeams: TopItem[] = [
  {
    id: 1,
    image: teamSpiritIcon,
    title: 'Team Spirit',
    value: '1 250 очков',
    arrowType: 'up',
  },
  {
    id: 2,
    image: naviIcon,
    title: 'NAVI',
    value: '1 185 очков',
    arrowType: 'up',
  },
  {
    id: 3,
    image: g2Icon,
    title: 'G2 Esports',
    value: '1 098 очков',
    arrowType: 'down',
  },
  {
    id: 4,
    image: vitalityIcon,
    title: 'Vitality',
    value: '980 очков',
    arrowType: 'up',
  },
  {
    id: 5,
    image: fazeIcon,
    title: 'FaZe Clan',
    value: '875 очков',
    arrowType: 'down',
  },
];

export const mockTopPlayers: TopItem[] = [
  {
    id: 1,
    image: donkImage,
    title: 'donk',
    value: '1.38',
    arrowType: 'up',
  },
  {
    id: 2,
    image: m0nesyImage,
    title: 'm0NESY',
    value: '1.32',
    arrowType: 'up',
  },
  {
    id: 3,
    image: zywooImage,
    title: 'ZywOo',
    value: '1.28',
    arrowType: 'up',
  },
  {
    id: 4,
    image: ropzImage,
    title: 'ropz',
    value: '1.25',
    arrowType: 'down',
  },
  {
    id: 5,
    image: sh1roImage,
    title: 'sh1ro',
    value: '1.24',
    arrowType: 'up',
  },
];

export const mockSchedule: ScheduleItem[] = [
  {
    id: 1,
    icon: calendarIcon,
    title: 'ESL Pro League S19',
    specialDate: '3 — 16 июня',
  },
  {
    id: 2,
    icon: trophyIcon,
    title: 'PGL Major Copenhagen',
    specialDate: '17 — 31 июля',
  },
  {
    id: 3,
    icon: swordsIcon,
    title: 'BLAST Premier Fall',
    specialDate: '12 — 22 сентября',
  },
];
