/*

    Thermometer

    Write a function "randomTemperatur" that return a temperature in Celsius or in Farenheight

    This function take one parameter that can be:
    
    "c" if we want to have a celsius value
    "f" if we want to have a farenheight value

    The number to calcul is a generated random number.
    You must create this random number.
    
    You must convert this generated number to the requested unit.
    So if I ask you to convert to Celsius, consider that the generated number is in Fahrenheit.

    Write your own tests !
    
*/

// write your code below this comment

function randomTemperatur(temperatureUnit){
    var celsuisTemperature = Math.random()*30; // temp entre 0 et 30°C
    var fahrenheitTemperature = Math.random()*90; // temp entre 0 et 90 F = environ 30°c
    var temperature;
    if (temperatureUnit == 'f') {
        temperature = 1.8*celsuisTemperature + 32 + ' F';
    }
    else if (temperatureUnit == 'c'){
        temperature = (fahrenheitTemperature - 32)/1.8 + ' °C';
    }
    return temperature;
}

console.log(randomTemperatur('f'));
console.log(randomTemperatur('c'));