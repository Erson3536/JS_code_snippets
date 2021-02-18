var x = 10;

function firstFunc() {
    console.log(x);
}

function secondFunc() {
    var x = 20;
    firstFunc();
}

secondFunc();