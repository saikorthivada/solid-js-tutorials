import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, Index } from 'solid-js';
import searchValue from './Search';

function App() {
  const arr = [
    {
      name: 'sai'
    },
    {
      name: 'kumar sai'
    },
    {
      name: 'skk'
    }
  ];

  const [users, setUsers] = createSignal(arr);

  return (
    <div class={styles.App}>
      <input placeholder='Search value' use:searchValue={{
        setUsers,
        arr,
        searchKey: 'name'
      }}/>
      <Index each={users()}>
        {
          (user) => {
            return <p>{user().name}</p>
          }
        }
      </Index>
    </div>
  );
}

export default App;
