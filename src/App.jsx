import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  let sampleRef;

  const accessValue = () => {
    // console.log(sampleRef.value);
    sampleRef.focus();
  }
  return (
    <div class={styles.App}>
      <input ref={sampleRef} placeholder="test refs"/>

      <button onclick={() => accessValue()}>Access a value</button>
    </div>
  );
}

export default App;
