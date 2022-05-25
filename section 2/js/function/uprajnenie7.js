'use strict';


function calculateVolumeAndArea(sideLenght) {
    if (isNaN(sideLenght)){
        console.log('При вычислении произошла ошибка');
    } else {
        let fullSquare = sideLenght * sideLenght * 6;
        let fullVolume = sideLenght * sideLenght * sideLenght;
        console.log(`Объем куба: ${fullVolume}, площадь всей поверхности: ${fullSquare}`);
    }
    
}
calculateVolumeAndArea(5);
hile (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))