import { observable } from "mobx";

const HistoryStore = observable({
    history:[],
    pushHistory(path){
        this.history.push(path);
    }
})

export default HistoryStore;