import logo from './logo.svg';
import styles from './App.module.css';
import { createMemo, createSignal, Index } from 'solid-js';

function incrementByValue(input) {
  return input + 1;
}

function App() {
  const [count, setCount] = createSignal(0);
  const [arr, _] = createSignal([1, 2, 3, 4, 5]);



  const memoValue = createMemo(() => {
    console.log('with memo');
    return incrementByValue(count());
  });
  return (
    <div class={styles.App}>
      <Index each={arr()}>
        {
          (value) => {
            return <p>{value()}. {memoValue()}</p>
          }
        }
      </Index>
      <button onclick={() => setCount(count() + 1)}>Update count</button>
    </div>
  );
}

export default App;
