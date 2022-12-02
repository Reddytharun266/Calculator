function clear_screen() 
{
    document.getElementById("display").value = "";
}
 
function display(value) {
    document.getElementById("display").value += value;
}

function backspace() 
{
     document.getElementById("display").value  =  (document.getElementById("display").value).substring(0,  (document.getElementById("display").value).length - 1);
}
 
function calculate() 
{
    var result = document.getElementById("display").value;
    result = eval(result);
    document.getElementById("display").value = result;
}