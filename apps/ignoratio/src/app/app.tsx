import styles from './app.module.css';
import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Game } from '@elenchi/game';
export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="25" height="25" />
      </header>
      <main>
        <div className="github-star-badge">
          <img src={star} className="material-icons" alt="" />
          <p>Main content.</p>
        </div>
      </main>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route path="/game" exact render={() => <Game></Game>} />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
