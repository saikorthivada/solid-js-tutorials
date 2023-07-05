import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';
import { effect } from 'solid-js/web';

function App() {
  const [age, setAge] = createSignal(10);
  const [count, setCount] = createSignal(0);

  effect(() => {
    console.log('My age has been updated', age());
  });

  effect(() => {
    console.log('My count has been updated', count());
  })

  effect(() => {
    console.log('My age / count has been updated', count(), age());
  })

  return (
    <div class={styles.App}>
      <p>Age - {age()}</p>
      <button onClick={() => setAge(age() + 1)}>Update age</button>
      <button onClick={() => setCount(count() + 1)}>Update count</button>
    </div>
  );
}

export default App;
