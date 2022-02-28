const storageApi = [
    { name: "product 1", const: 450, count: 5 },
    { name: "product 2", const: 150, count: 1 },
    { name: "product 3", const: 100, count: 2 },
    { name: "product 4", const: 200, count: 3 },
];


class Purchase {
    constructor() {
        this.products = storageApi;
    }

    check(productName) {
        return this.products.find(product => product.name === productName);
    }

    get(product) {
        if (!product) {
            console.log(`${product} не найден в нашем магазине`);
            return null;
        }

        if(product.count >0) {
            product.count--;
            return product;
        } else {
            console.log(`Продукт => ${product.name} закончилсь в нашем магазине`);
            return null;
        }
    }

    sending(product) {
        console.log(`Заказ отправлен =>${product.name}`);
    }
}


class Shop {
    constructor() {
        this.purchase = new Purchase(); 
    }

    buy(product) {
        let order = this.purchase.check(product);
        order = this.purchase.get(order);

        if(order) {
            return this.purchase.sending(order);
        }
    }
}



const eMarket = new Shop();
eMarket.buy("product 2");
eMarket.buy("product 2");
eMarket.buy("product 1");