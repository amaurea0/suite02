/*

    Current Time

    Write a function "displayCurrentTime" that displays, each seconds, the current time infinitly;

    If the actual time is 10:30:08

    The script displays:

    10:30:09
    10:30:10
    10:30:11
    10:30:12
    10:30:13
    10:30:14
    ...

    One line each seconds.

    Tips:
    setTimeout

    Write your own tests !

*/

// write your code below this comment

function displayCurrentTime() {
    setInterval(ActualTime, 1000)
}

function ActualTime() {
    var now = new Date();
    var hour = now.getHours();
    if (hour < 10) hour = "0" + hour;

    var minute = now.getMinutes();
    if (minute < 10) minute = "0" + minute;
    var second = now.getSeconds();
    if (second < 10) second = "0" + second;
    var time = hour + ':' + minute + ':' + second;
    return console.log(time);

}

displayCurrentTime();



