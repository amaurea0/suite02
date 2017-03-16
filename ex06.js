
/*

    Bubble sort

    Write a function "bubbleSort".

    The function takes and sorts an array.

    The array contains only positive numbers.

    Exemple:
    [8, 3, 0] -> [0, 3, 8]

    Forbidden functions:
    sort

    Tips:
    use google

    Write your own tests !
    
*/

// write your code below this comment

function bubbleSort(array){
    var sortArray = array.sort();
    for(var i of sortArray){
        if (typeof i != "number") sortArray = "wrong entry : only numbers allowed in an array";
    }
    return sortArray;
}

console.log(bubbleSort([8, 3, 0]));
console.log(bubbleSort(["chat", 3, 0]));