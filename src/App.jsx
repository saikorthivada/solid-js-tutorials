import logo from './logo.svg';
import styles from './App.module.css';
import './global.css';
import { Portal } from 'solid-js/web';

function App() {
  return (
    <div class="App">
      <Portal>
        <div class='box'>
          <p>Box styling</p>
        </div>
      </Portal>
    </div>
  );
}

export default App;
