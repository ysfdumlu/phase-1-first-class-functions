function receivesAFunction(cb){
    cb();
}

const logFn = () => console.log("This is the function called");
receivesAFunction(logFn);

function returnsANamedFunction(){
    return function named(){
        console.log("This is the named function returned");
    };
}
const namedFn = returnsANamedFunction();
namedFn();

function returnsAnAnonymousFunction(){
    return () => console.log("This is the anonymous function returned");
}
const anonFn = returnsAnAnonymousFunction();
anonFn();
