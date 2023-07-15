import { mergeProps } from "solid-js";

function Child(props) {
    console.log(props);
    // const {age} = props; // No destructuting
    // const updatedProps = Object.assign({name: 'sai'}, props); // Do not use
    // const updatedProps = mergeProps({name: 'sai'}, props);

    const updatedProps = mergeProps(props);
    return (
        <div>
            <h1>Age - {updatedProps.age}</h1>
        </div>
    );
}
export default Child;