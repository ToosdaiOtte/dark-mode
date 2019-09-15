import { useEffect } from 'react'; 
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue, callback) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        const body = window.document.body;
        if(value){
            body.classList.add('dark-mode');
        } else{
            body.classList.remove('dark-mode');
        }
    }, [value]);
    return [value, setValue];
}