
//Изначально Робот умел работать только с двигателем EngineX2
class Robot {
    constructor(engine){
        this.engine = engine;
    }

    operation() {
        this.engine.go();
    }
}
class EngineX2 {
    go() {
        console.log("умеет ходить");
    }
}
const oldRobot = new Robot(new EngineX2());
oldRobot.operation();


//Новый двигатель EngineX8 и другие методы реализации, не несовместимо с роботом

class EngineX8 {
    goFaster() {
        console.log("умеет ходить быcтрее");
    }
}

// const newRobot2 = new Robot(new EngineX8());
// newRobot2.operation(); 
// не работает

// Адаптер для робота

class EngineX8Adapter {
    constructor() {
        this.engine = new EngineX8();
    }

    go() {
        this.engine.goFaster();
    }
}

const newRobot = new Robot(new EngineX8Adapter());
newRobot.operation();

