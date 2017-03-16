/*

    Eval Expr

    Write a function "console.log(evalExpr" that can )solve simples arithmetic calculs;

    We will pass only positive integer numbers.

    Exemples:

    console.log(evalExpr(4, 5, "*")); // 20
    console.log(evalExpr(3, 3, "+")); // 6
    console.log(evalExpr(2, 2, "%")); // 0
    console.log(evalExpr(3, 3, "-")); // 0
    console.log(evalExpr(10, 2, "/"); // 5

    console.log(evalExpr(10, 0, "/"); // 0

    Validation:
    I want to see at least 6 functions.

    Write your own tests !
    
    Forbidden functions:
    eval

*/

// write your code below this comment

function evalExpr(nbr1, nbr2, operation) {
    var result;
    if (operation == "*") result = multiply(nbr1, nbr2);
    else if (operation == "/") result = divide(nbr1, nbr2);
    else if (operation == "+") result = addition(nbr1, nbr2);
    else if (operation == "-") result = soustraction(nbr1, nbr2);
    else if (operation == "%") result = modulo(nbr1, nbr2);
    return result;
}

function multiply(nbr1, nbr2) {
    return nbr1 * nbr2;
}
function divide(nbr1, nbr2) {
    var result;
    result = nbr1 / nbr2;
    if (nbr2 == 0) result = 0;
    return result;
}
function addition(nbr1, nbr2) {
    return nbr1 + nbr2;
}
function soustraction(nbr1, nbr2) {
    return nbr1 - nbr2;
}
function modulo(nbr1, nbr2) {
    return nbr1 % nbr2;
}

    console.log(evalExpr(4, 5, "*")); // 20
    console.log(evalExpr(3, 3, "+")); // 6
    console.log(evalExpr(2, 2, "%")); // 0
    console.log(evalExpr(3, 3, "-")); // 0
    console.log(evalExpr(10, 2, "/")); // 5

    console.log(evalExpr(10, 0, "/")); // 0