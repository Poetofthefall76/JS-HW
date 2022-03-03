const ar1 = [1, 2, 3, 4, 5];
const ar2 = [1, 2, 3, 4, 5, 6, 77];

let a = ar1.lenght
let b = ar2.lenght

function twoMass(a,b){
    if(a > b){
        console.log('Первый больше')
    }else if(a < b){
        console.log('второй больше')
    }
    else{
        console.log('Они равны')
    }
}

twoMass(a, b);