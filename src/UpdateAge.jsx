import { contextConsumer } from "./UserContext";

 function UpdateAge() {
    const {updateAge} = contextConsumer()
    return (
        <div>
            <button onclick={() => updateAge(5)}>Update age</button>
        </div>
    );
}
    export default UpdateAge;