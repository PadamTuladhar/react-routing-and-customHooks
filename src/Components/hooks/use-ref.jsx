import { useEffect, useRef } from "react"

export default function UseRefHook() {

    const countValue = useRef(0);
    const divElementRef = useRef();
    const inputElementRef = useRef();

    function handleClick() {
        countValue.current++;
        console.log(countValue.current);
    }
    useEffect(() => {
        const getDivElement = divElementRef.current;
        getDivElement.style.color = 'red';

        setTimeout(() => {
            getDivElement.style.color = 'green';
        }, 1000);

        const getInputElement = inputElementRef.current;
        getInputElement.focus();
    }, [])
    return (
        <>
            <h1>Use ref hook example</h1>
            <button className="button" onClick={handleClick}>Click me</button>
            <div ref={divElementRef}>Some text</div>
            <input name='name' placeholder="Enter your name" ref={inputElementRef} />
        </>
    )
}