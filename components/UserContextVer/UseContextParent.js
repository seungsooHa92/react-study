import React, { useState,useEffect, useContext } from 'react';
import {TextContext} from '../../contexts/textStore';
import UseContextChild from './UseContextChild';

const UseContextParent = () => {

    const context = useContext(TextContext);
    
    useEffect(()=>{
        console.log('%c Parent Component useEffect with []','background:red')
    },[]);

    useEffect(()=>{
        console.log('%c Parent Component useEffect with [text]','background:red')
    },[context.text]);

    const clickHandler = (e)=>{
        context.setText(e.target.innerText)
    }

    return (
        <div style={{width:"1000px",height:"600px"}}>
            <fieldset style={{width:"1000px",height:"600px"}}>
                <legend>ParentComponent</legend>    
                <>
                <button onClick = {clickHandler}>setTextatParent</button>
                </>
                <span>I am parent</span>
                <span> ::{context.text} </span>
                <UseContextChild />
            </fieldset>
        </div>
    );
};

export default UseContextParent;