import apexIcon from '../../pages/main/images/apex.png';
import cs2Icon from '../../pages/main/images/cs2.png';
import dota2Icon from '../../pages/main/images/dota2.png';
import fortniteIcon from '../../pages/main/images/fortnite.png';
import lolIcon from '../../pages/main/images/lol.png';
import valorantIcon from '../../pages/main/images/valorant.png';
import { GameItem } from './types';

export const mockGames: GameItem[] = [
  {
    id: 1,
    image: cs2Icon,
    title: 'CS2',
  },
  {
    id: 2,
    image: dota2Icon,
    title: 'DOTA 2',
  },
  {
    id: 3,
    image: valorantIcon,
    title: 'VALORANT',
  },
  {
    id: 4,
    image: lolIcon,
    title: 'LEAGUE OF LEGENDS',
  },
  {
    id: 5,
    image: apexIcon,
    title: 'APEX LEGENDS',
  },
  {
    id: 6,
    image: fortniteIcon,
    title: 'FORTNITE',
  },
];
