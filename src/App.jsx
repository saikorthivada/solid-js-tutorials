import logo from './logo.svg';
import styles from './App.module.css';
import { createEffect, createSignal, untrack } from 'solid-js';

function App() {
  const [age, setAge] = createSignal(10);
  const [count, setCount] = createSignal(0);
  // const [totalValue, setTotalVale] = createSignal(0);

  const totalValue = () => age() + untrack(count);

  // createEffect(() => {
  //   console.log('inside effect');
  //   setTotalVale(age() + untrack(count));
  // });

  return (
    <div class={styles.App}>
      <p>Age - {age()}</p>
      <p>Count - {count()}</p>
      <p>Total - {totalValue()}</p>
      <button onClick={() => setAge(age() + 1)}>Update Age</button>
      <button onClick={() => setCount(count() + 1)}>Update Count</button>
    </div>
  );
}

export default App;
