import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, For, Index } from 'solid-js';

function App() {
  const [users, setUsers] = createSignal([]);

  const addAUser = () => {
    const [isDeleted, setIsDeleted] = createSignal(false);
    setUsers([...users(), {
      id: users().length + 1,
      name: `Sai ${users().length + 1}`,
      isDeleted,
      setIsDeleted
    }]);
  }

  const deleteUserById = (id) => {
    const user = users().find(obj => obj.id === id);
    if(user) {
      user.setIsDeleted(true);
    }
    // setUsers(
    //   users().map((obj) => {
    //     if(obj.id === id) {
    //       return {
    //         ...obj,
    //         isDeleted: true
    //       }
    //     } else {
    //       return obj
    //     }
    //   })
    // )
  }
  return (
    <div class={styles.App}>
      <button onClick={() => addAUser()}>Add a random user</button>
      <For each={users()}>
        {
          (user) => {
            console.log('Inside loop');
            return (
              <div>
                <p style={{"text-decoration": user.isDeleted() ? "line-through" : "none"}}>{user.name}</p>
                <button onclick={() => deleteUserById(user.id)}>Delete User - {user.id}</button>
              </div>
            )
          }
        }
      </For>
    </div>
  );
}

export default App;
