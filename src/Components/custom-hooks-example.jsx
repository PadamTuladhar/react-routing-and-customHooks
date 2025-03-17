//useLocalStorage
//useCounter
//useSessionStorage
//useId
//useOutsideClick

import { useState } from "react"
import useLocalStorageComponent from "./hooks/localStorage-hook"

export default function CustomHooksExample() {
    const [name, setName] = useLocalStorageComponent('name', '')

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <>
            <label style={{ padding: "20px" }} >Name</label>
            <input name='firstName' id='firstName' type='text' onChange={handleChange} />
            <div>
                Name you entered: {name}
            </div>
        </>
    )
}