import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, For, Index } from 'solid-js';

function App() {
  const [names, setNames] = createSignal(["sai", "kumar", "korthivada"]);
  return (
    <div class={styles.App}>
      {/* {
        names().map((name) => {
          return <p>{name}</p>
        })
      } */}
      {/* <For each={names()}>
        {
          (name, index) => {
            return <p>{name} - {index}</p>
          }
        }
      </For> */}

      <Index each={names()}>
        {
          (name, index) => {
            return <p>{name} - {index}</p>
          }
        }
      </Index>
    </div>
  );
}

export default App;
