/*

    search Area

    We give you a map, in array like:

    [
        "xxxxxxxxxxx",
        "xxxx...x..x",
        "xxxx...x..x",
        "xxxx...xxxx",
        "xxxxxxx..xx",
        "xx..xxxxxxx",
        "xx..xxxx.xx",
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    You need to find the biggest square we can draw in the map, by replace '.' in strings.
    The square size and square map can be various, and will be random at correction.

    '.' is for a free space.
    'x' is for walls.
    'o' is for the square resolution/composition.

    We expect that array in return:

    [
        "xxxxxxxxxxx",
        "xxxxooox..x", // here is 
        "xxxxooox..x", // a square
        "xxxxoooxxxx", // with 3x3 dimension
        "xxxxxxx..xx",
        "xx..xxxxxxx", // here is 
        "xx..xxxx.xx", // a square dimension 2x2 but not the biggest
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    There is only one possibility in this exemple. If there is more than one, take the last.

    Tips:
    Test your own maps !

*/

// write your own code below this comment



function searchArea(array) {
    var nbr_colomn = array[0].length;
    var nbr_line = array.length;
    var max_point;
    if (nbr_colomn > nbr_line) max_point = nbr_line;
    else max_point = nbr_line;

    for (var nbr_point = max_point; nbr_point > 0; nbr_point--) {
        var j = 0;
        var arrayIndexPoint = [];

        for (var line of array) {
            arrayIndexPoint.push(indexOfPoint(line, nbr_point));
        }

        var coordinate = coordinateOfSquare(arrayIndexPoint,nbr_point);

        if (typeof coordinate != "undefined") {
            return squareResolution(array, coordinate, nbr_point);
        }
    }
}

function indexOfPoint(line, nbr_point) {
    var string_point = linePoint(nbr_point, ".");
    var arrayIndexPoint = [];
    for (var i in line) {
        var index = line.indexOf(string_point, i)
        if (index != -1 && arrayIndexPoint.indexOf(index) == -1) arrayIndexPoint.push(index);
    }
    return arrayIndexPoint;
}

function linePoint(nbr_point, caracter) {
    var line = caracter;
    for (var i = 1; i < nbr_point; i++) {
        line += caracter;
    }
    return line;
}

function coordinateOfSquare(arrayIndexPoint,nbr_point) {
    var limit = arrayIndexPoint.length - nbr_point;
    var coordinate;

    for (var j_line = 0; j_line <= limit; j_line++) {

        for (var i = 0; i <= limit; i++) {
            var sum_index = 0;

            for (var k = j_line; k < j_line + nbr_point; k++) {

                if (typeof arrayIndexPoint[k][i] != "undefined") sum_index += arrayIndexPoint[k][i]
            }
            if (sum_index == nbr_point * arrayIndexPoint[j_line][i]) coordinate = [j_line, arrayIndexPoint[j_line][i]];
        }
    }
    return coordinate;
}

function squareResolution(array, coordinate, nbr_point) {
    var x = coordinate[0];
    var y = coordinate[1];
    var string_o = linePoint(nbr_point, "o");
    var new_array = [];
    for (var i = x; i < x + nbr_point; i++) {
        array[i] = replaceAt(array[i], y, string_o)
    }
    return array;
}

function replaceAt(string, index, character) {
    return string.substr(0, index) + character + string.substr(index + character.length);
}


var array = [
    "xxxxxxxxxxx",
    "xxxx...x..x",
    "xxxx...x..x",
    "xxxx...xxxx",
    "xxxxxxx..xx",
    "xx..xxxxxxx",
    "xx..xxxx.xx",
    "x...xxxx..x",
    "xxxxxxx..xx",
    "xx.x.xx..xx",
    "xxxxxxxxxxx"
];

console.log(searchArea(array));

var array = [
    "xxxxxxxxx.xx",
    "xxxx...x...x",
    "xxxx...x...x",
    "xxxx...xxx.x",
    "xxxxxxx...xx",
    "xx..xxxxxx.x",
    "xx..xxxx..xx",
    "x...xxxx..x",
    "xxxxxxx...xx",
    "xx.x.xx...xx",
    "xx.x.xx...xx",
    "xxxxxxx.xxxx"
];

console.log(searchArea(array));