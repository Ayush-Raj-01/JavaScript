//generate a random color

const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random() * 16 )]
    }
    return color
}

// let interval
// document.querySelector('#start').addEventListener('click' , function() {
//     function changeBackground(){
//         document.body.style.backgroundColor = randomColor();
//     }
//     if(!interval){
//     interval = setInterval(changeBackground,1000);
//     }
// })

// document.querySelector('#stop').addEventListener('click' , function () {
//     clearInterval(interval)
//     interval = null
// })

// or another way 

let intervalId;

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

function startChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
}

function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);