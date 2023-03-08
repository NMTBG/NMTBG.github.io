
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imgaes/adw.png') {
      myImage.setAttribute ('src','imgaes/79.png');
    } else {
      myImage.setAttribute ('src','imgaes/adw.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('輸入你的名子');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '你被笨蛋冰住了, ' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}

