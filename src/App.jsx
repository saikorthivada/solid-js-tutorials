import logo from './logo.svg';
import styles from './App.module.css';
import { createResource, createSignal } from 'solid-js';

const fetchDataById = async (id) => {
  return (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json();
}

function App() {
  const [sourceId, setSourceId] = createSignal(1);
  const [todo, {refetch, mutate}] = createResource(sourceId, fetchDataById);
  return (
    <div class={styles.App}>
      {
        todo.loading ? <p>Loading ...</p> :
        todo.error ? <p>Something went wrong </p> :
        todo() ? <p>{todo().title}</p> : null
      }
      <button onClick={() => setSourceId(() => sourceId() + 1)}>Update source id - {sourceId()}</button>
      <button onClick={() => refetch()}>Refetch</button>
      <button onClick={() => mutate((value) => {
        return {
          ...value,
          title: 'Updated locally'
        }
      })}>Update current resource title</button>
    </div>
  );
}

export default App;
