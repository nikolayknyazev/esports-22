import './index.css'

import { GameItem } from './types'

interface GameCardProps {
  game: GameItem;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="game-card">
      <img
        src={game.image}
        alt={game.title}
        className="game-card-image"
      />
      <h3 className="game-card-title">
        {game.title}
      </h3>
    </div>
  )
}