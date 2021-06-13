import { Route, Link } from 'react-router-dom';

import './game.module.css';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
  return (
    <div>
      <h1>Welcome to game!</h1>

      <ul>
        <li>
          <Link to="/">game root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the game root route.</div>} />
    </div>
  );
}

export default Game;
