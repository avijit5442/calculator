//display value by clicking
function BTN(a){
    document.getElementById("result").value+=a
}
//clear all values by clicking 'c' button
function clear1(){
    document.getElementById("result").value="";
}
//clear only one value by clicking 'backspace' button
function backspace(){
    var d=document.getElementById("result").value;
    document.getElementById("result").value=d.slice(0,d.length-1);
}
//to solve/calculate
function equal(){
    var b=document.getElementById("result").value;
    document.getElementById("result").value=eval(b)
}

