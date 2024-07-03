// when ever u create anything in js even a variable they have some hidden methods or properties
// these  come with a proptotype
// Array.prototype;
// (2).Array.__proto__;
//then u can access all the properties for prototype and prototype have also prototype
let obj = {
    name: "waqas",
    city: "sahiwal",
    province: "punjab",
};

let obj2 = {
    name: "rehman",
};
// obj2.__proto__ = obj;
console.log(obj2.name);
function fun1() {
    return 1 + 2;
}
fun1.prototype.fun2 = function (params) {
    // this is adding fun2 to   fun1 prototype
};
