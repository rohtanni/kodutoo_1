const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const decreaseFontSizeButton = document.getElementById('decrease-font-size');
const increaseFontSizeButton = document.getElementById('increase-font-size');
const fontFamilyDropdown = document.getElementById('font-family');
const fontColorButton = document.getElementById('font-color-button');
const backgroundColorButton = document.getElementById('background-color');
let timeFontSize = 3;
let fontColor = '#fff';

document.getElementById("increase-font-size").addEventListener("click", textBigger);
document.getElementById("decrease-font-size").addEventListener("click", textSmaller);
window.addEventListener("keydown", textSize);
fontFamilyDropdown.addEventListener('change', changeFontFamily);
backgroundColorButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }

function updateFontColor() {
    timeElement.style.color = fontColor;
}

function setFontColor(color) {
    fontColor = color;
    updateFontColor();
}

fontColorButton.addEventListener('change', function() {
    const color = this.value;
    setFontColor(color);
});

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  timeElement.textContent = time;
}


function updateDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
  dateElement.textContent = fullDate;
}

function textSize(e){
    if(e.keyCode == 109){
        textSmaller();
    } else if(e.keyCode == 107){
        textBigger();
    }
}

function textBigger(){
    timeFontSize = timeFontSize + 0.1;
    document.getElementById("time").style.fontSize = timeFontSize + "em";
}

function textSmaller(){
    timeFontSize = timeFontSize - 0.1;
    document.getElementById("time").style.fontSize = timeFontSize + "em";
}

function changeFontFamily() {
    const selectedFont = fontFamilyDropdown.value;
    document.body.style.fontFamily = selectedFont + ', sans-serif';
}


// Call functions initially to avoid delay in displaying the time and date
setInterval(updateTime, 1000);
updateTime();
updateDate();
