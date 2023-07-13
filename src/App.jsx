import logo from './logo.svg';
import styles from './App.module.css';
import { createEffect, createSignal, on, untrack } from 'solid-js';

function App() {
  const [age, setAge] = createSignal(10);
  const [count, setCount] = createSignal(0);

  createEffect(on(age, (currentAge, previousAge) => {
    console.log('current age', currentAge);
    console.log('previous age', previousAge);
    console.log('count', count());
  }, {defer: true}));
  return (
    <div class={styles.App}>
      <p>Age - {age()}</p>
      <p>Count - {count()}</p>
      <button onclick={() => setAge(age() + 1)}>Update age</button>
      <button onclick={() => setCount(count() + 1)}>Update count</button>
    </div>
  );
}

export default App;
