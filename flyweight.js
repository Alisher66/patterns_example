
class Bonus {
    constructor(present) {
        this.present = present;
        this.users = [];
    }

    getBonus(user) {
        const candidate = this.hasBonus(user.login);
        if(candidate) {
            console.log(`Пользователь ${candidate.login} уже имеет бонус, подарок => ${this.present}`)
            return candidate;
        }

        this.users.push(user);
        console.log(`Новый пользователь ${user.login}, подарок => ${this.present}`)
        return user;
    }

    hasBonus(login){
        return this.users.find(user => user.login === login);
    }
}

class User {
    constructor(login, description) {
        this.login = login;
        this.description = description;
    }
}

let dima = new User("Dima", "11111");
let alex = new User("Alex", "2222");

const mainBonus = new Bonus("Телефон");

mainBonus.getBonus(dima);
mainBonus.getBonus(alex);
mainBonus.getBonus(dima);