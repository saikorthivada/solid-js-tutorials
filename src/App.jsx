import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';
import Child from './Child';

function App() {
  const [age, setAge] = createSignal(10);

  return (
    <div class={styles.App}>
      <Child age={age()}/>
      <button onClick={() => setAge(age() + 1)}>Update Age</button>
    </div>
  );
}

export default App;
