alert('Script bởi Yubikitasu with <3 ~~')
var texthead = document.getElementsByTagName('head')[0].innerHTML;
var textbody = document.body.innerHTML;
var htmlEl = document.getElementsByTagName("html")[0];
htmlEl.removeChild(document.getElementsByTagName("head")[0]);
var el = document.createElement("head");
htmlEl.appendChild(el);
var htmlEl2 = document.getElementsByTagName("html")[0];
htmlEl2.removeChild(document.getElementsByTagName("body")[0]);
var el2 = document.createElement("body");
htmlEl2.appendChild(el2);
var i = 0;
document.title = "The True Random Game";
document.body.innerHTML = '<div class="layer"><div id="aoetes"></div><div id="main" class="tkvan"> <label for="typing1" class="min_max">Nhỏ nhất:</label> <input type="number" id="gnum1" class="aw_man" name="typing1"> <label for="typing2" class="min_max">Lớn nhất:</label> <input type="number" id="gnum2" class="aw_man" name="typing2"> <input class="buttonCl" type="submit" value="Random!" onclick="return randomNumber();"><hr><p>Numbers: <b id="ltnum"></b></p><div> <input class="button_Click_a" type="submit" value="Reset" onclick="return resetAll();"> <input class="button_Click_a" type="submit" value="Trở về trang trước" onclick="return returnPage();"> </div></div></div><style>.tkvan{text-align:center;font-size:30px;vertical-align:middle}.buttonCl{padding:10px;cursor:pointer;font-size:20px}.aw_man{width:77px}.min_max{font-size:14px;margin-top:10px;height:auto}.button_Click_a{cursor:pointer;margin-left:10px;margin-right:10px}body{font-family:Helvetica}.layer{position:absolute;top:0;left:0;width:100%;height:100vh;background:linear-gradient(to left, #8693ab, #bdd4e7);z-index:-1}</style>';
var clickA = 0
function randomNumber() {
  clickA = clickA + 1;
  var a = parseInt(document.getElementById('gnum1').value, 10);
  var b = parseInt(document.getElementById('gnum2').value, 10);
  if (a >= b) {
    alert('"Nhỏ nhất" phải nhỏ hơn "Lớn nhất".')
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
function returnPage() {
    alert('Cảm ơn vì đã sử dụng Script của mình nha ~~')
    var htmlEl = document.getElementsByTagName("html")[0];
    htmlEl.removeChild(document.getElementsByTagName("head")[0]);
    var el = document.createElement("head");
    el.innerHTML = texthead;
    htmlEl.appendChild(el);
    var htmlEl2 = document.getElementsByTagName("html")[0];
    htmlEl2.removeChild(document.getElementsByTagName("body")[0]);
    var el2 = document.createElement("body");
    el2.innerHTML = textbody;
    htmlEl2.appendChild(el2);
}
//Set the div to half of the screen
var hheight = document.getElementById('main').offsetHeight;
var screen_h = screen.height;
var div_height = (screen_h / 2) - (hheight / 4 + (hheight / 2))
document.getElementById('aoetes').innerHTML = '<div style="height:' + div_height + 'px";></div>';
