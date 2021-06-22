import React, { useState,useEffect } from 'react';
import Child from './Child';

const Parent = () => {

    const [text,setText] = useState('');
    
    useEffect(()=>{
        console.log('%c Parent Component useEffect with []','background:red')
    },[]);
    useEffect(()=>{
        console.log('%c Parent Component useEffect with [text]','background:red')
    },[text]);
    const clickHandler = (e)=>{
        setText(e.target.innerText)
    }
    return (
        <div style={{width:"1000px",height:"600px"}}>
            <fieldset style={{width:"1000px",height:"600px"}}>
                <legend>ParentComponent</legend>    
                <>
                <button onClick = {clickHandler}>setTextatParent</button>
                </>
                <span>I am parent</span>
                <span> :: {text}</span>
                <Child 
                text={text}
                setText={setText}
                />
            </fieldset>
        </div>
    );
};

export default Parent;