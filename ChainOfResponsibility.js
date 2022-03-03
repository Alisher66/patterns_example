
class Robot {
    constructor(name) {
        this.name = name;
        this.skill = [];
    }

    have(key, value) {
        this[key] = value;
        return this;
    }
    can(arg) {
        this.skill.push(arg);
        return this;
    }
}

const robot1 = new Robot("alex");
robot1.have("engine", "v8").have("legs", 8).have("soul", false).can("write").can("jump");

console.log(robot1)