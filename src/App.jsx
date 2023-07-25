import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, For, Index } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

function App() {
  const [users, setUsers] = createStore([]);

  const addAUser = () => {
    // setUsers([...users, {
    //   id: users.length + 1,
    //   name: `Sai ${users.length + 1}`,
    //   isDeleted: false
    // }]);

    setUsers(
      produce((users) => {
        users.push({
          id: users.length + 1,
          name: `Sai ${users.length + 1}`,
          isDeleted: false
        })
        return users;
      })
    )
  }

  const deleteUserById = (id) => {
    setUsers(
      (user) => user.id === id,
      produce((user) => user.isDeleted = true)
    );
  }
  return (
    <div class={styles.App}>
      <button onClick={() => addAUser()}>Add a random user</button>
      <For each={users}>
        {
          (user) => {
            console.log('Inside loop');
            return (
              <div>
                <p style={{ "text-decoration": user.isDeleted ? "line-through" : "none" }}>{user.name}</p>
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
