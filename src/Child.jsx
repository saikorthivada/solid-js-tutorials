import { children } from "solid-js";

function Child(props) {

    const childrenSample = children(() => props.children);

    return (
        <div>
            {childrenSample()[0]}
            <p>Im after child 1</p>
            <p>{childrenSample()[1]}</p>
            <p>{childrenSample()[2]}</p>
        </div>
    );
}
export default Child;