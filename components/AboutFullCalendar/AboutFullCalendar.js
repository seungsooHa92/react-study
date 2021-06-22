import React ,{useState,useRef,useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import luxonPlugin from '@fullcalendar/luxon';
import rrulePlugin from '@fullcalendar/rrule';
import CalendarHeader from './CalendarHeader';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useHistory } from 'react-router-dom';
import useStore from '../../useStore';
import { useObserver } from 'mobx-react-lite';
const AboutFullCalendar = () => {
    
    const history = useHistory();
    //! LOCAL STATE PART
    const [modalVisible, setModalVisible] = useState(false);
    const mainRef = useRef('mainRef');
    const {HistoryStore,CalendarStore} = useStore();

    useEffect(()=>{
        console.log('[AboutFullCalendar] useEffect deps with [HistoryStore]');
        console.log('history from useHistory>',history);
        console.log('HistoryStore from useStore >',HistoryStore);
        console.log('HistoryStore.pushHistory >',HistoryStore.pushHistory(history.location.pathname));
    },[HistoryStore]);
    //! USEEFFECT PART
    useEffect(()=>{
        console.log('%c history 변경시에 useEffect [AboutFullCalendar]','background:blue');
        console.log(history)
    },[history]);

    useEffect(()=>{
        console.log('%cuseEffect deps with []','background:beige');
        console.log('mainRef >',mainRef);
        console.log('mainRef.current.getApi() >',mainRef.current.getApi());
    },[])

    //! EVENT HANDLER && UTIL FUNCTION PART
    const handleSelect = (info)=>{
        //* info는 select 이벤트시에 넘겨오는 데이터 자체 
        console.log('[Calendar > select Handler]');
        console.log('info :',info);
        console.log('info.view.calendar :',info.view.calendar);

        CalendarStore.clickedDate = info.startStr;
    }
    return useObserver(()=>(
<>
            <CalendarHeader/>
            <CalendarContent>
                <Layout>
                <FullCalendar
                ref={mainRef}
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    luxonPlugin,
                    rrulePlugin,
                ]} 
                selectable = {true} //* selectable true로 설정되어있어야 날짜 선택 가능 
                editable = {true}
                headerToolbar={null}
                nowIndicator
                titleFormat="yyyy.{MM}"
                initialView="dayGridMonth"
                fixedWeekCount={6}
                select = {handleSelect}
                />
                </Layout>
            </CalendarContent>
            <TempCalendarInfo>
                <TempField>
                    <legend>Temp Calendar Info [state from MobX Calendar Store] </legend>
                    <span>현재 클릭된 date: {CalendarStore.clickedDate}</span>
                    <br />
                    <span>지금까지 클릭된dateList: </span>
                </TempField>
            </TempCalendarInfo>
        </>
    ))
    
};

export default AboutFullCalendar;

const CalendarContent = styled.div`
    flex: 1;
    width: 100%;
    min-height: 0;
    height: 60vh;
    .ant-layout {
    background-color: "beige";
    .fc-media-screen {
        width: 80%;
        height: 60vh;
    }
}`;

const TempCalendarInfo = styled.div`
    width: 79%;
    height: 25vh;
    margin-top: 1rem;
`;
const TempField = styled.fieldset`
    width: 100%;    
    height: 25vh;
`;