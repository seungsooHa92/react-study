import React, { useEffect } from 'react';
import './App.scss';
import ParentChildCommunication from './components/ParentChildCommunication/ParentChildCommunication';
import { lnbData } from './data';
import {Route, useHistory} from 'react-router-dom';
import UseContextVer from './components/UserContextVer/UseContextVer';
import AboutFullCalendar from './components/AboutFullCalendar/AboutFullCalendar';
import useStore from './useStore';
import { observer,useObserver } from 'mobx-react-lite';

const App = () => {
  
  const history = useHistory(); //* routing을 위한 history
  //const hTwoRef = useRef('hTwoRef'); //*h2 tag 참조자 
  const {HistoryStore} = useStore();

  const listClickHandler = (e)=>{
      history.push(`/${e.target.innerText}`)
  }
  //! useEffect 초기 렌더링시에 불리는 useEffect
  useEffect(()=>{
    console.log('[APP] useEffect deps with [HistoryStore]');
    console.log('history from useHistory>',history);
    console.log('HistoryStore from useStore >',HistoryStore);
    console.log('HistoryStore.history >',HistoryStore.history);
    console.log('HistoryStore.pushHistory >',HistoryStore.pushHistory(history.location.pathname));
  },[HistoryStore])

  useEffect(()=>{

    console.log('[App] useEffect deps with [HistoryStore.history]  HistoryStore history배열값 변경될때');
    console.log(HistoryStore.history)

  },[HistoryStore.history])

  useEffect(()=>{
    console.log('%c history 변경시에 useEffect [App]','background:blue');
    HistoryStore.pushHistory(history.location.pathname);
  },[history])

  return useObserver(()=>(
    <div className = "App">
        <>
        <div className = "LNB">
          {lnbData.map((list,index)=>(
            <div 
            className="LNBList" 
            key={index}
            onClick = {listClickHandler}
            >
              {list}
            </div>
          ))}
        </div>
        <div className="content">
          <div className="contentheader">
          <span>SAMPLE Study</span>
          <span>    CurrentHistory : {HistoryStore.history[HistoryStore.history.length-1]}</span>
          </div>
          <hr/>
          <Route path="/ParentChildCommunication" component={ParentChildCommunication} />
          <Route path="/UseContextVer" component={UseContextVer} />
          <Route path="/AboutFullCalendar" component={AboutFullCalendar} />
        </div>
        </>
    

    </div>
  ));
};

export default App;