import logo from './logo.svg';
import styles from './App.module.css';
import Child from './Child';
import { createSignal } from 'solid-js';

function App() {

  const [age, setAge] = createSignal(10);
  const [name, setName] = createSignal('sai');
  const [address, setAddress]= createSignal('Hyderabad');
  return (
    <div class={styles.App}>
      <Child age={age()} name={name()} address={address()} role={'Software'}/>
      <button onClick={() => setAge(age() + 1)}>Update age</button>
    </div>
  );
}

export default App;
