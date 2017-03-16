/*

    Find Sum By Multiples

    If we list all the natural numbers below 10 that are
    multiples of 3 or 5, we get 3, 5, 6 and 9.

    The sum of these multiples is 23.

    In a function "findSumByMultiples", find the sum of all the multiples of 3 or 5 below 1000.

    Write your own tests !
    
*/

// write your code below this comment

function findSumByMultiples(nbr) {
    var total = 0;
    for (var i = 1; i < nbr; i++) {
        total += IsMultipleOf3or5(i);
    }
    return total;
}

function IsMultipleOf3or5(nbr) {
    var result = 0;
    if (nbr % 3 == 0) result = nbr;
    else if (nbr % 5 == 0) result = nbr;
    return result;
}

console.log(findSumByMultiples(10));        // 23
console.log(findSumByMultiples(16));        // 60
console.log(findSumByMultiples(1000));       
