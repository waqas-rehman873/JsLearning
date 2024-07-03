//function with its lexical  environment forms a cloures
function f1(params) {
    let x = 2;
    function f2(params) {
        console.log(x);
    }
    // f2();
    // x = 12;

    f2(function f3(params) {
        console.log(x);
    });
    return f2;
}
// f1();
// u can also pass function in parameter and return
//
let d = f1();
d();
