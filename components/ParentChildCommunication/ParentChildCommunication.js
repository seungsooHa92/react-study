import React ,{useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Parent from './Parent';
import useStore from '../../useStore';

const ParentChildCommunication = () => {

    const history = useHistory();
    const {HistoryStore} = useStore();

     //! useEffect 초기 렌더링시에 불리는 useEffect
    useEffect(()=>{
        console.log('[ParentChildCommunication] useEffect deps with [HistoryStore]');
        console.log('history from useHistory>',history);
        console.log('HistoryStore from useStore >',HistoryStore);
        console.log('HistoryStore.pushHistory >',HistoryStore.pushHistory(history.location.pathname));
    },[HistoryStore]);

    useEffect(()=>{

        console.log('[ParentChildCommuncation] useEffect deps with [HistoryStore.history]  HistoryStore history배열값 변경될때');
        console.log(HistoryStore.history)
    
    },[HistoryStore.history])
    useEffect(()=>{
        console.log('%c history 변경시에 useEffect [ParentChildCommunication]','background:blue');
        console.log(history)
    },[history]);
    return (
        <div>
            <Parent />
        </div>
    );
};

export default ParentChildCommunication;