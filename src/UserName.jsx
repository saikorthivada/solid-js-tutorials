import { contextConsumer } from "./UserContext";

 function UserName() {

    const {userDetails} = contextConsumer();
    return (
        <div>Name - {userDetails().name}</div>
    );
}
    export default UserName;