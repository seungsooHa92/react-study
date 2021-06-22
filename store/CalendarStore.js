import { observable } from "mobx";

const CalendarStore = observable({
    clickedDate:'',
    clickedDateList:[],
    setClickedDate(date){
        this.clickedDate = date;
    },
    setClickedDateList(date){
        this.clickedDateList.push(date);
    }
})

export default CalendarStore;