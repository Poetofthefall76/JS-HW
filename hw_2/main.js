const list = []

for(let i = 1; 1 <= 100; i++){
    if (i %15 === 0){
        list.push("FizzBuzz");
    }else if(i % 3 === 0){
        list.push("Fizz")
    }else if(i % 5 === 0){
        list.push("Buzz")
    }else {
        list.push(1);
    }
}
console.log(list)