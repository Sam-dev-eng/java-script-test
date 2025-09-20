let power = false;
let temperature = 24;



function checkPower(){
    return power;
}
function toogleButton(){
    if (!power) power = true;
    else power = false;
}
function checkTemperature(){
    return temperature;
}

function increaseTemperature(){
    if (power && temperature > 16 && temperature < 31)
    temperature--;
}

function decreaseTemperature(){
    if (power && temperature >= 16 && temperature < 30)
    temperature++;
}
module.exports = {toogleButton,checkPower,checkTemperature,increaseTemperature,decreaseTemperature}