const array = ["name", "age", "color", "gender", "school"]

const mass= [...array]

console.log(mass)
♡♡♡, [28.02.2022 18:31]
const array1 = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'E',
        age: 21,
    },
    {
        name: 'M',
        age: 34,
    },
    {
        name: 'K',
        age: 26,
    },
    {
        name: 'B',
        age: 53,
    },
]
const mass1 = [...array1,
    {
        name: "u",
        age: 19,
    },
    {
        name: "i",
        age: 19,
    },
    {
        name: "p",
        age: 1,
    },
]
console.log(mass1)

document.querySelector('button').addEventListener('click', myClick)

function myClick() {
    let Nur = document.querySelector('.name').value;
    document.querySelector('.text').innerHTML = "Welcome: " + Nur ;
}