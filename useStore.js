import HistoryStore from "./store/HistoryStore";
import CalendarStore from "./store/CalendarStore";
//* 추가로 store 생길때 통합해서 사용하려고 만들어둔것뿐

const useStore = ()=>{
    return {
        HistoryStore,
        CalendarStore
    }
};

export default useStore;