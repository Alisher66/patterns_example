// class Subject {
//     constructor() {
//         this.observers = []
//     }

//     subscribe(observer) {
//         this.observers.push(observer)
//     }

//     unsubscribe(observer) {
//         this.observers = this.observers.filter(input => input !== observer)
//     }
//     call(action) {
//         this.observers.forEach(observer => {
//             observer.update(action)
//         })
//     }
// }

// class Observer {
//     constructor(state = 1) {
//         this.state = state
//         this.initialState = state;

//     }
//     update(action) {
//         switch (action.type) {
//             case 'INCREMENT':
//                 this.state = ++this.state
//                 break;
//             case 'DECREMENT':
//                 this.state = --this.state
//                 break;
//             case 'ADD':
//                 this.state += this.payload
//                 break;

//             default:
//                 this.state = this.initialState

//         }
//     }
// }


// const subject = new Subject()
// const observer1 = new Observer()
// const observer2 = new Observer(20)

// subject.subscribe(observer1)
// subject.subscribe(observer2)

// subject.call({ type: 'INCREMENT' })
// subject.call({ type: 'DECREMENT' })
// subject.call({ type: 'DECREMENT' })
// subject.call({ type: 'ADD', payload: 20 })

// console.log(observer1.state)
// console.log(observer2.state)


class News {
    constructor() {
        this.news = "";
        this.users = [];
    }

    addNews(text) {
        this.news = text;
        this.notify();
    }

    notify() {
        this.users.forEach(user => user.inform(this.news))
    }

    subscribe(user) {
        this.users.push(user);
    }

    unsubscribe(user) {
        this.users = this.users.filter(input => input !== user)
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    inform(news) {
        console.log(`user ${this.name} has been informed => ${news}`);
    }
}

const alex = new User("Alex");
const dima = new User("Dima");

const sportNews = new News();

sportNews.subscribe(alex)
sportNews.subscribe(dima);

sportNews.addNews("news 1111");