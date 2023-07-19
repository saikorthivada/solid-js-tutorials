import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';
import {createStore} from 'solid-js/store';
function App() {
  // const [userDetails, setUserDetails] = createSignal({
  //   name: 'sai',
  //   age: 10
  // });

  const [userDetails, setUserDetails] = createStore({
    name: 'sai',
    age: 10
  });

  const updateName = () => {
    // setUserDetails({...userDetails(), name: Math.random().toString()});
    setUserDetails("name", Math.random().toString());
  }

  const updateAge = () => {
    // setUserDetails({...userDetails(), age: userDetails().age + 1});
    setUserDetails("age", (currentAge) => currentAge + 1);
  }
  return (
    <div class={styles.App}>
      <p>Name - {userDetails.name}</p>
      <p>Age - {userDetails.age}</p>
      <button onClick={() => updateName()}>Update Name</button>
      <button onClick={() => updateAge()}>Update Age</button>
    </div>
  );
}

export default App;
