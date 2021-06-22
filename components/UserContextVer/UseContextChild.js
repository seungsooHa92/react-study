import React, { useState,useEffect, useContext } from 'react';
import {TextContext} from '../../contexts/textStore'

const UseContextChild = () => {
    const context = useContext(TextContext);
    useEffect(()=>{
        console.log('%c Child Component useEffect with []','background:yellow')
    },[]);
    useEffect(()=>{
        console.log('%c Child Component useEffect with [text]','background:yellow')
    },[context.text]);
    const clickHandler = (e)=>{
        context.setText(e.target.innerText)
    }
    return (
        <div style={{width:"600px",height:"400px"}}>
        <fieldset style={{width:"600px",height:"400px"}}>
            <legend>ChildComponent</legend>    
            <>
                <button onClick = {clickHandler}>setTextatChild</button>
            </>
            <span>I am child</span>
            <span> :: {context.text}</span>

        </fieldset>
    </div>
    );
};

export default UseContextChild;