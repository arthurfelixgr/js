const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {},
    get mains() {},
    get desserts() {},
    set appetizers(entrada) {},
    set mains(principal) {},
    set desserts(sobremesa) {},
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let index = Math.floor( Math.random() * dishes.length );
        return this._courses[courseName][index];
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse("appetizers");
        let main = this.getRandomDishFromCourse("mains");
        let dessert = this.getRandomDishFromCourse("desserts");
        let totalPrice = appetizer.price + main.price + main.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice}.`;
    },
};
menu.addDishToCourse("appetizers", "pudim", 12);
menu.addDishToCourse("appetizers", "quidim", 14);
menu.addDishToCourse("appetizers", "sopa", 20);
menu.addDishToCourse("mains", "feijoada", 10);
menu.addDishToCourse("mains", "frango", 5);
menu.addDishToCourse("mains", "tutu", 20);
menu.addDishToCourse("desserts", "mousse", 4);
menu.addDishToCourse("desserts", "cupcake", 8);
menu.addDishToCourse("desserts", "bolo", 5);
const meal = menu.generateRandomMeal();
console.log(meal);