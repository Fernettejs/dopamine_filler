// const playSwitch = document.querySelector(".switch");
// window.onload=function(){

// playSwitch.onclick = function(element) {
//     const audio = new Audio('completion.mp3');
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code:'audio.play();'});   
//     });
// };
// };

const playSwitch = document.querySelector(".switch");
playSwitch.addEventListener("click", play);

const switch1 = document.getElementById("switch1");
switch1.addEventListener("click", play);

const switch12 = document.getElementById("switch2");
switch2.addEventListener("click", play);

const switch3 = document.getElementById("switch3");
switch3.addEventListener("click", play);

const switch4 = document.getElementById("switch4");
switch4.addEventListener("click", play);

const switch5 = document.getElementById("switch5");
switch5.addEventListener("click", play);

const switch6 = document.getElementById("switch6");
switch6.addEventListener("click", play);


function play() {
    const audio = new Audio('completion.mp3');
    audio.currentTime = 0;  //ADD
    audio.play();
};


    // document.querySelector(".switch").addEventListener("click", 
    // function() {
    //     const audio = new Audio('completion.mp3');
    //     audio.currentTime = 0;  //ADD
    //     audio.play();
    // });
