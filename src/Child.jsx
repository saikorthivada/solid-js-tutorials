import { splitProps } from "solid-js";

function Child(props) {

    const [personalInfo, addressInfo,remainingInfo] = splitProps(props, ["age", "name"], ["address"])
    return (
        <>
            <p>Age: {personalInfo.age}</p>
            <p>Name: {personalInfo.name}</p>
            <p>addressInfo: {JSON.stringify(addressInfo)}</p>
            <p>remainingInfo: {JSON.stringify(remainingInfo)}</p>
        </>
    )
}

export default Child;