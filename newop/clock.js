const clock = document.querySelector("#clock");


function sayHello(){
    const date = new Date();
    const yoilArray = ['일','월','화','수','목','금','토']
    const year = date.getFullYear(),
    month =date.getMonth()+1,
      days = date.getDate(),
     hours = date.getHours(),
     minutes = date.getMinutes(),
     seconds = date.getSeconds(),
     yoil = date.getDay();

    clock.innerText = `${month < 10 ? `0${month}월` : `${month}월`}${
        days < 10 ? `0${days}일` : `${days}일`} ${hours < 10 ? `0${hours}` : `${hours}`}:${
            minutes < 10 ? `0${minutes}` : `${minutes}`}:${
                seconds < 10 ? `0${seconds}` : `${seconds}`} ${yoilArray[yoil]}요일`;
    
}

    sayHello();
    setInterval(sayHello,1000);






