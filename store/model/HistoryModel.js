import { observable, action } from "mobx";

class HistoryModel {

    @observable
    history=[];

    @action
    pushHistory(path){
        this.history.push(path);
    }
}
export default HistoryModel;