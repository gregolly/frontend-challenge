import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue)

    const varWindow = window

    useEffect(() => {
        if (typeof varWindow === 'undefined') return;
        let value = localStorage.getItem(item)
        if (value) setValue(JSON.parse(value))
    }, [varWindow])

    function updateLocalStorage(newValue: T) {
        setValue(newValue)
        localStorage.setItem(item, JSON.stringify(newValue))
    }

    return {
        value,
        updateLocalStorage,
    }
}