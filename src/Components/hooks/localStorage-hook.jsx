import { useEffect, useState } from "react";

export default function useLocalStorageComponent(key, initialValue) {
    const [newValue, setNewValue] = useState(() => {
        const value = window.localStorage.getItem(key);
        return value;
    })

    useEffect(() => {
        window.localStorage.setItem(key, newValue);
    }, [key, newValue])
    return [newValue, setNewValue];
}