import logo from './logo.svg';
import styles from './App.module.css';
import Child from './Child';

function App() {
  let childRef;

  const getUserChildValue = () => {
    console.log(childRef.value);
  }
  return (
    <div class={styles.App}>
      <Child ref={childRef}/>
      <button onClick={() => getUserChildValue()}>Access child input</button>
    </div>
  );
}

export default App;
