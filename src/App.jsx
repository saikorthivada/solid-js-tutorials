import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';

function App() {

  const [name, setName] = createSignal('Sai');

  const nameUpdate = (e, data) => {
    setName(e.currentTarget.value);
  }
  return (
    <div class={styles.App}>
      <h2>Name - {name()}</h2>
      <button onclick={() => setName('sai' + Math.random().toString())}>Change name</button>
      {/* <input value={name()} onInput={(event) => setName(event.target.value)} placeholder={'Enter some name'}/> */}

      <input type="text" value={name()} onInput={(e) => nameUpdate(e, 'kumar')} placeholder={'Enter some name'}/>
    </div>
  );
}

export default App;
