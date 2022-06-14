'use strict';


function calculateVolumeAndArea(sideLenght) {
    if (isNaN(sideLenght) || !Number.isInteger(sideLenght) || sideLenght < 0){
        console.log('При вычислении произошла ошибка');
    } else {
        let fullSquare = sideLenght * sideLenght * 6;
        let fullVolume = sideLenght * sideLenght * sideLenght;
        console.log(`Объем куба: ${fullVolume}, площадь всей поверхности: ${fullSquare}`);
    }
    
}
calculateVolumeAndArea(-15);

function getCoupeNumber(placeNumber) {
    if(isNaN(placeNumber) || !placeNumber.isInteger || placeNumber < 0){
        console.log("Ошибка. Проверьте правильность введенного номера места");
    } else if(placeNumber > 36 || placeNumber <= 0){
        console.log("Таких мест в вагоне не существует");
    } else {
        let coupeNumber = (placeNumber / 4);
        if(coupeNumber.isInteger){
            console.log(coupeNumber);
        } else {
            console.log(Math.floor(coupeNumber) + 1);
        }
    }
    
 }

getCoupeNumber(7);
function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
   
}