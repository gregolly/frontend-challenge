import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initialValue
      });
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
      }, [key, value])

      function updateLocalStorage(newValue: T) {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    
      return { value, setValue, updateLocalStorage }
}