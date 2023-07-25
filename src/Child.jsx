
function Child(props) {

    return (
        <div>
            <input ref={props.ref} placeholder="forward ref"/>
        </div>
    );
}
export default Child;