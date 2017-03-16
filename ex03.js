/*

    Two ways currency converter

    1) Write one function "numberToPrice" that convert a number to a price.

        If we got the number 4 in parameter,
        you need to return a string that contain "4,00€";

    2) Write a second function "priceToNumber" that convert a price to a number.

        If we got the string "4,59€" in parameter,
        you need to return a float number that is equal to 4.59;

    3) If we pass an empty string or negative number, return 0 or empty string;

    Is 0 positive or negative ?

    Write your own tests !

*/

// write your code below this comment

function numberToPrice(nbr) {
    nbr = nbr.toFixed(2);           // affiche 2 chiffres significatifs
    var price = nbr.toString().replace('.', ',') + '€';
    if (nbr<0) price = '';
    return price;
}

function priceToNumber(price) {
    var nbr = parseFloat(price.replace(',', '.').replace('€', ''));
    if (price == '') nbr = 0;
    return nbr;
}

console.log(numberToPrice(4));
console.log(priceToNumber("4,59€"));
console.log(numberToPrice(-4));
console.log(priceToNumber(''));
