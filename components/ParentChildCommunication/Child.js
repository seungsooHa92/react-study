import React, { useState,useEffect } from 'react';

const Child = ({text,setText}) => {
    
    useEffect(()=>{
        console.log('%c Child Component useEffect with []','background:yellow')
    },[]);
    useEffect(()=>{
        console.log('%c Child Component useEffect with [text]','background:yellow')
    },[text]);
    const clickHandler = (e)=>{
        setText(e.target.innerText)
    }
    return (
        <div style={{width:"600px",height:"400px"}}>
        <fieldset style={{width:"600px",height:"400px"}}>
            <legend>ChildComponent</legend>    
            <>
                <button onClick = {clickHandler}>setTextatChild</button>
            </>
            <span>I am child</span>
            <span> :: {text}</span>

        </fieldset>
    </div>
    );
};

export default Child;