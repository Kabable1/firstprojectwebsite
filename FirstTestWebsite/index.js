let count = 0

document.getElementById("buttonCounter").onclick = function(){
    count -=1;
    document.getElementById("buttonCount").innerHTML = count;
}

document.getElementById("buttonCounter2").onclick = function(){
    count =  0;
    document.getElementById("buttonCount").innerHTML = count;
}

document.getElementById("buttonCounter3").onclick = function(){
    count +=1;
    document.getElementById("buttonCount").innerHTML = count;
}