var htmlEl = document.getElementsByTagName("html")[0];
htmlEl.removeChild(document.getElementsByTagName("head")[0]);
var el = document.createElement("head");
htmlEl.appendChild(el);
var htmlEl2 = document.getElementsByTagName("html")[0];
htmlEl2.removeChild(document.getElementsByTagName("body")[0]);
var el2 = document.createElement("body");
htmlEl2.appendChild(el2);
document.body.innerHTML = '<div id="aoetes"></div><div id="main" class="tkvan"> <label for="typing1" class="min_max">Min:</label> <input type="number" id="gnum1" class="aw_man" name="typing1"> <label for="typing2" class="min_max">Max:</label> <input type="number" id="gnum2" class="aw_man" name="typing2"> <input class="buttonCl" type="submit" value="Random!" onclick="return randomNumber();"><hr><p>Numbers: <b id="ltnum"></b></p><div> <input style="cursor: pointer;" type="submit" value="Reset" onclick="return resetAll();"></div></div><style>.tkvan{text-align:center;font-size:30px;vertical-align:middle}.buttonCl{padding:10px;cursor:pointer;font-size:20px}.aw_man{width:77px}.min_max{font-size:14px;margin-top:10px;height:auto} body{font-family:Helvetica;}</style>';
var clickA = 0
function randomNumber() {
  clickA = clickA + 1;
  var a = parseInt(document.getElementById('gnum1').value, 10);
  var b = parseInt(document.getElementById('gnum2').value, 10);
  if (a >= b) {
    alert('Min must smaller than Max.')
    document.getElementById('gnum1').value = "";
    document.getElementById('gnum2').value = "";
  } else if (b > a) {
    var x =  Math.floor((Math.random() * b) + 1)
    if (x <= a) {
      var x2 = Math.floor((Math.random()* (b-a)) + 1) + a;
      x = x2;
    }
    if (clickA == 10) {
      document.getElementById('ltnum').innerHTML = ' ' + x + ',';
      clickA = 0;
    } else {
      document.getElementById('ltnum').innerHTML += ' ' + x + ',';
    }
  }
  else {
    alert('Error.')
  }
}

function resetAll() {
  document.getElementById('ltnum').innerHTML = "";
  clickA = 0;
}

//Set the div to half of the screen
var hheight = document.getElementById('main').offsetHeight;
var screen_h = screen.height;
var div_height = (screen_h / 2) - (hheight / 4 + (hheight / 2))
document.getElementById('aoetes').innerHTML = '<div style="height:' + div_height + 'px";></div>';
