// class User {
//     constructor(name) {
//         this.name = name
//         this.room = null
//     }
//     send(message, to) {
//         this.room.send(message, this, to)
//     }
//     receive(message, from) {
//         console.log(`${from.name} to ${this.name}:->${message}`)
//     }
// }
// class Room {
//     constructor() {
//         this.users = {}
//     }
//     register(user) {
//         this.users[user.name] = user
//         user.room = this
//     }
//     send(message, from, to) {
//         if (to) to.receive(message, from)
//         else {
//             Object.keys(this.users).forEach(key => {
//                 if (this.users[key] !== from) {
//                     this.users[key].receive(message, from)
//                 }
//             })
//         }
//     }
// }

// const vasya = new User('Vasya')
// const peter = new User('Peter')
// const ivan = new User('Ivan')

// const room = new Room()
// room.register(vasya)
// room.register(peter)
// room.register(ivan)


// vasya.send('Привет!', peter)




class OfficialDealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
};

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info)
    }
};

const mediator = new OfficialDealer();

const alex = new Customer("Alex", mediator);
const dima = new Customer("Dima", mediator);

alex.makeOrder("Nexia", "info1111");
