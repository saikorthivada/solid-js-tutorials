import logo from './logo.svg';
import styles from './App.module.css';
// import LazyComponent from './LazyComponent';
import { createSignal, lazy } from 'solid-js';

const LazyComponent = lazy(() => import('./LazyComponent'));
function App() {
  const [count, setCount] = createSignal(1);
  return (
    <div class={styles.App}>
      {
        count() % 2 === 0 && <LazyComponent />
      }
      
      <button onclick={() => setCount(() => count() + 1)}>Update count</button>
    </div>
  );
}

export default App;
