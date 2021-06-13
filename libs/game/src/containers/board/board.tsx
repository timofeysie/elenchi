import './board.module.css';
import Cards from '../../components/cards/cards';

/* eslint-disable-next-line */
export interface BoardProps {}

export function Board(props: BoardProps) {
  return (
    <div>
      <h1>Welcome to board!</h1>
      <Cards></Cards>
    </div>
  );
}

export default Board;
