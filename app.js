const daysEL = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const button = document.querySelector(".submit");
const value = document.querySelector(".date");

let date =  new Date("1 Jan 2023");




function renderDate(e) {
    e.preventDefault();
    if(!(value.value)) {
        return;
    }
    let today = new Date();
    let givenDate = new Date(value.value);

    if((givenDate - today) <0) {
        return;
    }

    date = givenDate;

    
}

//get time 
button.addEventListener("click", renderDate);




function timer(time) {


    setInterval(() => {
        let currentDate = new Date();
        let totalSeconds = Math.floor((date- currentDate)/1000);

        let days = Math.floor((totalSeconds/3600)/24);
        let hours = Math.floor((totalSeconds/3600) %  24);
        let minutes = Math.floor((totalSeconds/3600)*60)%60;
        let seconds = Math.floor((totalSeconds %60));


        daysEL.innerText = addZero(days);
        hoursEl.innerText = addZero(hours);
        minutesEl.innerText = addZero(minutes);
        secondsEl.innerText = addZero(seconds);
        
    }, 1000);

}


function addZero(value) {

    if(value <10) {
         return value = `0${value}`;
    }
    return value;
}

timer();