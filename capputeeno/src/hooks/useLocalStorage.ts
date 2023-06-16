import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
      });
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
    
      return{ value, setValue };
      
    // const [value, setValue] = useState<T>(initialValue)

    // const varWindow = window

    // useEffect(() => {
    //     if (typeof varWindow === 'undefined') return;
    //     let storedValue = localStorage.getItem(key)
    //     if (storedValue) setValue(JSON.parse(storedValue))
    // }, [varWindow])

    // function updateLocalStorage(newValue: T) {
    //     setValue(newValue)
    //     localStorage.setItem(key, JSON.stringify(newValue))
    // }

    // return {
    //     value,
    //     updateLocalStorage,
    // }
}