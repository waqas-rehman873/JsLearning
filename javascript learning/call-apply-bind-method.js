// call
// call;you can write method that can be used on different objects

let obj = {
    name: "waqas",
    lastname: "rehman",
    printName: function () {
        console.log(this.name + this.lastname);
    },
};
let printCity = function () {
    console.log(this.name + this.lastname);
};
let obj2 = {
    name: "waqasss",
    lastname: "rehmannn",
};
console.log(obj.printName());
console.log(obj.printName.call(obj2));
console.log(printCity.call(obj2));
//if we have parameters to the function then it wil add like

let prov = function (province) {
    console.log(this.name + this.lastname + " " + province);
};
// these both call a function
console.log(prov.call(obj2, "punjab"));
console.log(prov.apply(obj2, ["punjab"]));
// bind will creates a function that will invoke later
let copy = prov.bind(obj2, ["punjab q"]);
console.log(copy);
console.log(copy());
// /arrow
//arrow function does not have its own this ---it checs where it is defines rather then calling
const user = {
    first: "Mubasher",
    last: "Ali",
    getFirstName() {
        console.log("FIRST NAME: ", this.first);
    },
    getLastName: () => {
        console.log(this);
        // console.log("LAST NAME: ", this.last);
    },
};
user.getFirstName();
user.getLastName();
const boundGetLastName = user.getLastName.bind(user);
boundGetLastName();
