let sec=00;
let tens=00;
let min=00;
let getSeconds=document.querySelector('.sec');
let getTens=document.querySelector('.tens');
let getMins=document.querySelector('.min');
let startbtn=document.querySelector('.start');
let stopbtn=document.querySelector('.stop');
let resetbtn=document.querySelector('.reset');
let interval;

startbtn.addEventListener('click', ()=>{
    clearInterval(interval);
    interval=setInterval(startTimer,10);
})
stopbtn.addEventListener('click',() =>{
    clearInterval(interval);
})
resetbtn.addEventListener('click',()=>{
    clearInterval(interval);
    tens='00';
    sec='00';
    min='00';
    getSeconds.innerHTML=sec;
    getMins.innerHTML=min;
    getTens.innerHTML=tens;
})
function startTimer(){
    tens++;
    if(tens<=9){
        getTens.innerHTML='0'+tens;
    }
    if(tens>9){
        getTens.innerHTML=tens;
    }
    if(tens>99){
        sec++;
        getSeconds.innerHTML='0'+sec;
        tens=0;
        getTens.innerHTML='0'+0;
    }
    if(sec>9){
        getSeconds.innerHTML=sec;
    }
    if(sec>59){
        min++;
        getMins.innerHTML='0'+min;
        sec=0;
        getSeconds.innerHTML='0'+0;
    }
    if(min>9){
        getMins.innerHTML=min;
    }
}