import { onCleanup, onMount } from "solid-js";

function Timer() {
    let interval;
    onMount(() => {
        interval = setInterval(() => {
            console.log('Time or interval');
        }, 1000);
    });

    onCleanup(() => {
        console.log('Im inside cleanup');
        if(interval) {
            clearInterval(interval);
        }
    })

    return (
        <div>Timer</div>
    );
}
export default Timer;