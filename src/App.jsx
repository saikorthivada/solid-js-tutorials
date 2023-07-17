import logo from './logo.svg';
import styles from './App.module.css';
import Child from './Child';
import { createSignal } from 'solid-js';

function App() {

  const [age, setAge] = createSignal(10);
  return (
    <div class={styles.App}>
      <Child>
        <h1>Hai this a children prop</h1>
        <h2>Hain this is child 2</h2>
        <h3>Age - {age()}</h3>
      </Child>
      <button onClick={() => setAge(age() + 1)}>Update age</button>
    </div>
  );
}

export default App;
