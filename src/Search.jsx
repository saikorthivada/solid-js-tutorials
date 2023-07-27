export default function searchValue(el, valueAccessor) {

    const valueChange =() => {
        const enteredValue = el.value;
        const searchKey = valueAccessor().searchKey;
        const filteredArr = valueAccessor().arr.filter(obj => obj[searchKey]?.toLowerCase()?.includes(enteredValue?.toLowerCase()));
        console.log(filteredArr);
        valueAccessor().setUsers(filteredArr)
    }

    el.addEventListener('input', valueChange);
}