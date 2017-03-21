
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

function bubbleSort(items) {

    var length = items.length;
    for (var i = 0; i < length; i++) { //Number of passes
        for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
            //Compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //Swap the numbers
                var tmp = items[j];  //Temporary variable to hold the current number
                items[j] = items[j + 1]; //Replace current number with adjacent number
                items[j + 1] = tmp; //Replace adjacent number with current number
            }
        }
    }
    var sortItems = items;
    for (var i of items) {
        if (typeof i != "number") sortItems = "wrong entry : only numbers allowed in array";
    }
    return sortItems;

}

console.log(bubbleSort([8, 3, 0]));
console.log(bubbleSort(["chat", 3, 0]));