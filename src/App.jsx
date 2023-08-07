import logo from './logo.svg';
import styles from './App.module.css';
import { createResource, Suspense, SuspenseList } from 'solid-js';

const fetchNameAfterTen = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Ten seconds');
      resolve({
        name: 'Ten seconds after'
      })
    }, 10000);
  })
}

const fetchNameAfterFive = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Five seconds');
      resolve({
        name: 'Five seconds after'
      })
    }, 5000);
  })
}

function App() {
  const [tenData] = createResource(fetchNameAfterTen);
  const [fiveData] = createResource(fetchNameAfterFive);
  return (
    <div class={styles.App}>
      <SuspenseList revealOrder='backwards' tail='collapsed'>
     
        <Suspense fallback={() => <p>Loading Five ...</p>}>
          <p>{JSON.stringify(fiveData())}</p>
        </Suspense>
        <Suspense fallback={() => <p>Loading Ten ....</p>}>
          <p>{JSON.stringify(tenData())}</p>
        </Suspense>
      </SuspenseList>
    </div>
  );
}

export default App;
