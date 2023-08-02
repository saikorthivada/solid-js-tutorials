import logo from './logo.svg';
import styles from './App.module.css';
import { createResource, Index } from 'solid-js';

const fetchData = async () => {
  return (await fetch('https://jsonplaceholder.typicode.co/todo')).json();
}
function App() {

  const [users] = createResource(fetchData);
  return (
    <div class={styles.App}>
      {
        users.loading ? <p>Loading ... </p> :
        users.error ? <p>Error...</p> : 
          <Index each={users()}>
            {
              (user) => {
                return <p>{user().title}</p>
              }
            }
          </Index>
      }

    </div>
  );
}

export default App;
