let count = 0

document.getElementById("buttonCounter").onclick = function(){
    count +=1;
    document.getElementById("buttonCount").innerHTML = count;
}
