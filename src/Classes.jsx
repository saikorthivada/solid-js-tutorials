import { createSignal } from 'solid-js';
import styles, {red} from './Classes.module.css';


function Classes() {

    const [state, setstate] = createSignal(true);

    return (
        <div>
            Classes
            <p classList={{[red]: state()}}>Global css</p>
        </div>
    );
}
export default Classes;