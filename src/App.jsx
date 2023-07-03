import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, Show } from 'solid-js';
import First from './First';
import Second from './Second';
import Third from './Third';
import { Dynamic } from 'solid-js/web';

function App() {
  const componentsMap = {
    first: () => <First />,
    second: () => <Second />,
    third: () => <Third />
  }
  const [componentName, setComponentName] = createSignal('');
  return (
    <div class={styles.App}>
      <button onclick={() => setComponentName('first')}>First component</button>
      <button onclick={() => setComponentName('second')}>Second component</button>
      <button onclick={() => setComponentName('third')}>Third component</button>
      {/* {
        componentsMap[componentName()]?.()
      } */}
      <Dynamic component={componentsMap[componentName()]?.()}/>
    </div>
  );
}

export default App;
