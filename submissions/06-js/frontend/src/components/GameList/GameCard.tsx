import './index.css';

import { GameItem } from './types';

interface GameCardProps {
  game: GameItem;
}

export const GameCard = ({ game }: GameCardProps) => {
  const classNames = ['game-card'];

  if (game.title === 'FORTNITE') {
    classNames.push('game-card--fortnite');
  }

  if (game.title === 'LEAGUE OF LEGENDS') {
    classNames.push('game-card--lol');
  }

  return (
    <article className={classNames.join(' ')}>
      <img
        src={game.image}
        alt=""
        aria-hidden="true"
        className="game-card-image"
      />

      <h3 className="game-card-title">
        {game.title}
      </h3>
    </article>
  );
};
