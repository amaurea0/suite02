/*

    Smallest Multiple

    2520 is the smallest number that can be divided by each of the numbers
    from 1 to 10 without any remainder.

    What is the smallest positive number that is
    evenly divisible by all of the numbers from 1 to 20?

    Write a function "smallestMultipleFor" that solves this problem.

    Write your own tests !
    
*/

// write your code below this comment


function smallestMultipleFor(nbr) {
    var array = createArray(nbr);
    var smallestNumber = 1;

    do {
        var current_multiple = array[0]
        smallestNumber = smallestNumber * current_multiple;
        array = simplifyArrayMultiple(current_multiple, array);
    } while (array.length != 0)

    return smallestNumber;
}

function createArray(nbr) {
    var array = [];
    for (var i = 1; i <= nbr; i++) {
        array[i - 1] = i;
    }
    return array;
}

function simplifyArrayMultiple(current_multiple, array) {       //same as decomposition in prime number
    for (var i in array) {                                      // divide when number are divided by current_multiple, delete when number = 1
        if (array[i] % current_multiple == 0) array[i] /= current_multiple;
        if (array[i] == 1) array.splice(i, 1);
    }
    return array;
}

console.log(smallestMultipleFor(10));
console.log(smallestMultipleFor(20));
