let btn = document.getElementById("btn");
let Result=document.getElementById("Result");
let input=document.getElementById("num");


let WinNum=6;

function Game(){


if(input.value == WinNum){
    Result.innerHTML="You Right,Win!! " ;

}
else if(input.value<6) {
    Result.innerHTML="Too Low!! "; }
    else if(input.value>6) {
        Result.innerHTML="Too High!! "; }
        else if (input.value>0) {
            Result.innerHTML="You Wrong, lose!! "; }
    
}


btn.addEventListener('click',Game);