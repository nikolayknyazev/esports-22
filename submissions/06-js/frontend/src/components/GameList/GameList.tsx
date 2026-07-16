import './index.css';

import { GameCard } from './GameCard';
import { mockGames } from './mockGames';

export const GameList = () => {
  return (
    <div className="games">
      <div className="games-list">
        {mockGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <button className="games-all-link" type="button">
        Все игры →
      </button>
    </div>
  );
};
