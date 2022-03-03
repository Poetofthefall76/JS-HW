class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    login(name, password){
        if(this.name === name && this.password === password){
            console.log(this)
        }
        else{
            console.log("Неверно!")
        }
    }
}

const I = new User("A", "25")
console.log(I)
I.login('A','25')