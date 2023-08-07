import logo from './logo.svg';
import styles from './App.module.css';
import Timer from './Timer';
import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(1);
  return (
    <div class={styles.App}>
      {
        count() % 2 === 0 && <Timer />
      }
      <button onClick={() => setCount(() => count() + 1)}>Update count - {count()}</button>
      
    </div>
  );
}

export default App;
