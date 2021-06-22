import {useState ,createContext } from "react";

export const TextContext = createContext();
export const TextProvider = ({children})=>{
    const [text,setText] = useState('initial');
    const value = {
        text,
        setText
    }
    return (
        <TextContext.Provider value={value}>
            {children}
        </TextContext.Provider>
    )
}