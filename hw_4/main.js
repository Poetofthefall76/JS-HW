let count = 0;

const count = () => {
    const asd = document.getElementById('count');
    asd.innerText = count;
}

count()

const plusCount = () => {
    count++;
    count();
}

plusCount()

const minusCount = () => {
    count--;
    count();
}

minusCount();

