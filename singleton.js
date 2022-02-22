

class Moon {
    constructor(name){
        if(Moon.exist) {
            return Moon.instance;
        }
        Moon.instance = this;
        Moon.exist = true;
        this.name = name;
    }

    getMoon() {
        return this.name+" светит всем";
    }
}

const luna = new Moon("Луна");
const saturn = new Moon("Saturn");

console.log(luna.getMoon())
console.log(saturn.getMoon())