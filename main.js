var doc = document.querySelector('img');
doc.onclick = function(){
  var mySrc = doc.getAttribute('src');
  if(mySrc === 'images/pi.jpg'){
    doc.setAttribute('src','images/pi2.jpg');
  }
  else{
    doc.setAttribute('src','images/pi.jpg');
  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Pi É Topperson, '+ myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Pi É Topperson, '+ storedName;
}
myButton.onclick = function() {
  setUserName();
}
