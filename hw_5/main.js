const color = prompt('Enter color');

const circles = document.querySelectorAll('.circle');
console.log(circles)

let activeLight = 0;

function changeLight(){
    circles[activeLight].className = 'circle';
    if(color === 'red'){
        activeLight += 0;
    }else if(color.toLowerCase() === 'yellow'){
        activeLight += 1;
    }else if(color.toLowerCase() === 'green'){
        activeLight += 2;
    }
    const light = circles[activeLight];
    light.classList.add(light.getAttribute('color'))
}
changeLight();