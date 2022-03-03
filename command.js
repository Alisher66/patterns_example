
class TextRedactor {
    constructor() {
        this.text = "";
    }

    add(str) {
        this.text = `${this.text} ${str}`.trim();
        return this.text;
    }
    edit(str) {
        this.text = str.trim();
        return this.text;
    }

}

class Log {
    constructor() {
        if (Log.exist) {
            return Log.instance;
        }
        Log.instance = this;
        Log.exist = true;
        this.log = [];
    }
    getLog() {
        return this.log;
    }
}

class UserCommand {
    constructor(name, redactor) {
        this.name = name
        this.redactor = redactor;
        this.log = new Log().getLog();
        this.initUser();
    }

    initUser() {
        const current = {
            user: this.name,
            commands: [],
        }
        this.log.push(current);
    }
    execute(command, arg) {
        const current = this.log.find(item => item.user === this.name);

        const value = this.redactor[command](arg);

        const tempCommand = {
            command,
            value
        }

        current.commands.push(tempCommand);
        return value
    }

    restore(index) {
        const current = this.log.find(item => item.user === this.name);
        if (!current || current.commands.length == 0) return;
        if (current.commands.length > index && index >= 0) {
            return current.commands[index].value;
        } else {
            return "not found restore index";
        }
    }

    logInfo() {
        return this.log.find(item => item.user === this.name);
    }

}


const userCommand = new UserCommand("Alisher", new TextRedactor());
const userCommand2 = new UserCommand("Vasya", new TextRedactor());

console.log(userCommand.execute("add", "new post 1"));
console.log(userCommand.execute("edit", "aaa"));
console.log(userCommand.logInfo());


console.log(userCommand2.execute("add", "new post 2"));
console.log(userCommand2.execute("add", "asdasdasd"));
console.log(userCommand2.execute("edit", "1"));
let restor1 = userCommand2.restore(0);
console.log(userCommand2.execute("edit", restor1));

console.log(userCommand2.logInfo());
