import logo from './logo.svg';
import styles from './App.module.css';
import { createEffect, createSignal, onMount } from 'solid-js';

function App() {
  let ref;

  const [age, setAge] = createSignal(10);

  onMount(() => {
    console.log(age(), 'age');
    ref.focus();
  });

  createEffect(() => {
    console.log('effect', age());
  })
  return (
    <div class={styles.App}>
      {console.log('inside render')}
      <p>Age - {age()}</p>
      <input ref={ref}/>
      <button onClick={() => setAge(age() + 1)}>Update age</button>
    </div>
  );
}

export default App;
