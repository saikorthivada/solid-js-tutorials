import { createSignal } from 'solid-js';
import Classes from './Classes';
import logo from './logo.svg';
import './global.css';

function App() {

  const [isActive, setActive] = createSignal(true);

  const obj = {
    "font-size": "20px",
    "background-color": isActive() ? "red" : "blue"
  }
  return (
    <>
      <div style={obj}>
        <p>Hai this is inline style</p>
      </div>
      <Classes />
    </>
  );
}

export default App;
