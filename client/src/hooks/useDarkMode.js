import {useState, useEffect} from 'react';

export const useDarkMode = (key, initialValue) =>{
    const [dark, setDark] = useState(key, initialValue);
    
        useEffect(() =>{
            if (dark === true){
            document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
                
        }, [dark])
    
        return[dark, setDark]
    
    
    }