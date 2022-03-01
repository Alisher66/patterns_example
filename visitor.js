
class Factory {
    info() {
        return "Factory working";
    }

    accept(visitor) {
        visitor.factoryInsurance(this);
    }
}

class Office {
    info() {
        return "Office working";
    }
    accept(visitor) {
        visitor.officeInsurance(this);
    }
}

class OfferVesitor {
    factoryInsurance(factory) {
        console.log(factory.info());
        console.log("нуждаеться страховки от пожара");
    }
    officeInsurance(office) {
        console.log(office.info());
        console.log("нуждаеться финансовый страховки");
    }
}



let factory1 = new Factory();
let office2 = new Office()

let vesitor1 = new OfferVesitor();

factory1.accept(vesitor1);
office2.accept(vesitor1)



