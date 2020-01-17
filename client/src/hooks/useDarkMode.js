import {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';
export const useDarkMode = (key, initialValue) =>{
    const [dark, setDark] = useLocalStorage(key, initialValue);
    
        useEffect(() =>{
            if (dark === true){
            document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
                
        }, [dark])
    
        return[dark, setDark]
    
    
    }