import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, Match, Switch } from 'solid-js';

function App() {
  const [selectedProduct, setProduct] = createSignal('');
  return (
    <div class={styles.App}>
      <select value={selectedProduct()} onchange={(e) => setProduct(e.target.value)}>
        <option value={''}>No product</option>
        <option value={'Milk'}>Milk</option>
        <option value={'Choclate'}>Choclate</option>
      </select>
      <Switch fallback={<p>Selected Product Not Available</p>}>
        <Match when={selectedProduct() === 'Milk'}>
          <p>Milk</p>
        </Match>
        <Match when={selectedProduct() === 'Choclate'}>
          <p>Choclate</p>
        </Match>
      </Switch>
    </div>
  );
}

export default App;
