import logo from './logo.svg';
import styles from './App.module.css';
import UserDetails from './UserDetails';
import UpdateAge from './UpdateAge';
import { UserContextComponent } from './UserContext';

function App() {

  return (
    <UserContextComponent>
      <div class={styles.App}>
        <UserDetails></UserDetails>
        <UpdateAge></UpdateAge>
      </div>
    </UserContextComponent>
  );
}

export default App;
