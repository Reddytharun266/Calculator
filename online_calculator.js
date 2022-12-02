function clear_screen() 
{
    document.getElementById("answer").value = "";
}
 
function display(value) 
{
    document.getElementById("answer").value += value;
}

function backspace() 
{
     document.getElementById("answer").value  =  (document.getElementById("answer").value).substring(0,  (document.getElementById("answer").value).length - 1);
}
 
function calculate() 
{
    var result = document.getElementById("answer").value;
    result = eval(result);
    document.getElementById("answer").value = result;
}

function calculator() 
{
      const body = document.body,
      table = document.createElement('table');
      table.setAttribute("border", "5");
      table.setAttribute("align", "center");
      table.setAttribute("cellpadding", "30");
      table.setAttribute("cellspacing", "30");
      table.setAttribute("bgcolor", "lightgray");
      const tr = table.insertRow();
      const td = tr.insertCell();
      const input = document.createElement("input");
      input.setAttribute("id", "answer");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "0");
      td.appendChild(document.body.appendChild(input));
      const tr1 = table.insertRow();
      const td1 = tr1.insertCell();
      var button_names = ["(", ")", "C", "&#8592", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];
      for (var counter = 1; counter <= 20; counter++)
      {
            var temp = button_names[counter - 1];
            var btn = "btn" + counter;
            btn = document.createElement("BUTTON");
            btn.innerHTML = button_names[counter - 1];
            btn.setAttribute("id", temp);
            btn.setAttribute("value", counter);
            btn.setAttribute("class", "button");
            if(temp != "C" && temp != "&#8592" && temp != "=")
            {
                  var click_function = "display('" + temp + "')";
                  btn.setAttribute("onclick", click_function);
            }
            else if (temp == "C")
            {
                  btn.setAttribute("onclick", "clear_screen()");
            }
            else if (temp == "&#8592")
            {
                  btn.setAttribute("onclick", "backspace()");
            }
            else if (temp == "=")
            {
                  btn.setAttribute("onclick", "calculate()");
            }

            td1.appendChild(document.body.appendChild(btn));
            if (counter % 4 == 0)
            {
                  var br = document.createElement("BR");
                  td1.appendChild(document.body.appendChild(br));
            }
      }
      body.appendChild(table);
}