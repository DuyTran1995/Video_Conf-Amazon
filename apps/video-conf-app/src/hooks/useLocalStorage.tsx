import { useState, useEffect } from 'react';

export const useLocalStorage = (storageKey: string, defaultValue: string) => {
  const [state, setState] = useState('');

  useEffect(() => {
    const storedItem = localStorage.getItem(storageKey);
    setState(storedItem || defaultValue);
  }, [storageKey, defaultValue]);

  function changeState(value: string) {
    if (value === null) {
      localStorage.removeItem(storageKey);
    } else {
      localStorage.setItem(storageKey, value);
    }

    setState(value);
  }

  return [state, changeState];
};
