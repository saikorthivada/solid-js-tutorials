import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';
// const [count, setCount] = createSignal(1);
function App() {

  const [count, setCount] = createSignal(0);
  setInterval(() => {
    setCount(() => count() + 1);
  }, 3000);
  return (
    <div class={styles.App}>
      <h1>Count - {count()}</h1>
    </div>
  );
}

export default App;
