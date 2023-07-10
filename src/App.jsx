import logo from './logo.svg';
import styles from './App.module.css';
import { batch, createSignal } from 'solid-js';

function App() {
  const [age, setAge] = createSignal(10);
  const [count, setCount] = createSignal(0);

  const totalValue = () => {
    console.log('inside derived signal');
    return age() + count();
  }

  const updateAgeAndCount = () => {

    batch(() => {
      setAge(age() + 1);
      setCount(count() +1);
    });
  }

  return (
    <div class={styles.App}>
      <p>Age - {age()}</p>
      <p>Count - {count()}</p>
      <p>totalValue - {totalValue()}</p>
      <button onClick={() => updateAgeAndCount()}>Update age and count</button>
    </div>
  );
}

export default App;
