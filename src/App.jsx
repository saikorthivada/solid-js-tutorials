import logo from './logo.svg';
import styles from './App.module.css';
import Child from './child/Child';

function App() {
  return (
    <div class={styles.App}>
      <h1>App component</h1>
      <Child />
    </div>
  );
}

export default App;
