console.log("first exe");
setTimeout(() => {
    console.log("timer");
}, 0);
console.log("end");
//first exe will execute then set timer to call back queue then end print then compiler will
// execute the settimeout function
setTimeout(() => {
    console.log("timer r");
}, 5000);
// -->callback
// -->microcall back queue
// if time is 5 sec and below after ebd code is millions ine or it take it to 10sec to complete
//it will execute it after 10sec  this is currcurency model js
