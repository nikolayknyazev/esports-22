import './index.css';

import { GameCard } from "./GameCard"
import { mockGames } from "./mockGames";

export const GameList = () => {
  return (
    <div className="games">
      <div className="games-list">
        {mockGames.map((game) =>(
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="games-all-link">
        <span>Все игры →</span>
      </div>
    </div>
  )
}