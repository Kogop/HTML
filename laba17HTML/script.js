// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
/*
// Create a "copy" button and append it to each list item
var myNodelist1 = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist1.length; i++) {
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u00D7");
  span1.className = "copy";
  span1.appendChild(txt1);
  myNodelist1[i].appendChild(span1);
}*/

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
/* knopki copy na cajdoy plawke
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u00D7");
  span1.className = "copy";
  span1.appendChild(txt1);
  li.appendChild(span1);
*/
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Create a copy of checked list item when clicking on the "Copy" button
function newElement1() {
    var li = document.createElement("li");
    var textValue = document.getElementsByClassName("checked")[0].outerHTML;   //problema TUT. kak tolko I uznau kak poluchat imeno soderjimoe, to vse zarabotaet
    console.log(textValue);
    var t = document.createTextNode(textValue);
    li.appendChild(t);
    if (textValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  /*   knopki copy na cajdoy plawke
    var span1 = document.createElement("SPAN");
    var txt1 = document.createTextNode("\u00D7");
    span1.className = "copy";
    span1.appendChild(txt1);
    li.appendChild(span1);
  */
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }