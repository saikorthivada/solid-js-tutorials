import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';

function App() {
  const [age, setAge] = createSignal(10);
  const [multiplier, setMultiplier] = createSignal(2);

  const doubleAge = () => age() * multiplier();
  return (
    <div class={styles.App}>
      <p>Age - {age()}</p>
      <p>doubleAge - {doubleAge()}</p>
      <button onClick={() => setAge(age() + 1)}>Increment age value</button>
      <button onClick={() => setMultiplier(multiplier() + 1)}>Increment Multiplier value</button>
    </div>
  );
}

export default App;
