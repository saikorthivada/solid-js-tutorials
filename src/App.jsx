import logo from './logo.svg';
import styles from './App.module.css';
import Login from './Login';
import Register from './Register';
import { ErrorBoundary } from 'solid-js';

function App() {
  return (
    <div class={styles.App}>
      <ErrorBoundary fallback={(e) => <p>{e.message}</p>}>
        <Login />
      </ErrorBoundary>
      <ErrorBoundary fallback={(e) => <p>{e.message}</p>}>
        <Register />
      </ErrorBoundary>
    </div>
  );
}

export default App;
