import React ,{useEffect } from 'react';
import { TextProvider } from '../../contexts/textStore';
import UseContextParent from './UseContextParent';
import { useHistory } from 'react-router-dom';
import useStore from '../../useStore';

const UseContextVer = () => {

    const history = useHistory();
    const {HistoryStore} = useStore();

    useEffect(()=>{
        console.log('[UseContextVer] useEffect deps with [HistoryStore]');
        console.log('history from useHistory>',history);
        console.log('HistoryStore from useStore >',HistoryStore);
        console.log('HistoryStore.pushHistory >',HistoryStore.pushHistory(history.location.pathname));
    },[HistoryStore]);

    useEffect(()=>{
        console.log('%c history 변경시에 useEffect [UseContextVer]','background:blue');
        console.log(history)
    },[history]);
    return (
        <div>
            <TextProvider>
                <UseContextParent />
            </TextProvider>
        </div>
    );
};

export default UseContextVer;