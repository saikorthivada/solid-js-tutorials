import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, Show } from 'solid-js';
import Marked from './Marked';

function App() {
  const [show, setShow] = createSignal(false);
  return (
    <div class={styles.App}>
      {/* <p>{show() ? 'Marked' : 'Not Marked'}</p> */}
      <Show when={show()}>
        <Marked />
      </Show>

      {/* {show() && <Marked />} */}
      <button onclick={() => setShow(true)}>Mark as show</button>
    </div>
  );
}

export default App;
