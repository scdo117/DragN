//ClassNmae para draggable = dragItem
//droppable = dropItem
'use strict';
var relativePositionX;
setTimeout(() => {
    //Obtener elementos que serán arrastrables
    let drags = document.querySelectorAll('.dragItem');
    let drops = document.querySelectorAll('.dropItem');

    [].forEach.call(drags, elem => {
        elem.setAttribute('draggable', 'true');
    });

    [].forEach.call(drops, elem => {
        let minutesColumn = elem.querySelectorAll('.minutesColumn');
        [].forEach.call(minutesColumn, minutes => {
            let wth = $(minutes).width();


            for (let it = 0; it < 5; it++) {
                let grid = document.createElement('div');
                grid.style.width = (wth/5)+'px';
                grid.className='minuteColGrid';
                minutes.appendChild(grid);
            }

        });
    });


}, (1));

