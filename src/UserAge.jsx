import { contextConsumer } from "./UserContext";

 function UserAge() {
    const {userDetails} = contextConsumer();

    return (
        <div>Age - {userDetails().age}</div>
    );
}
    export default UserAge;