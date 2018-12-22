//ClassNmae para draggable = dragItem
//droppable = dropItem
'use strict';
var _relativePositionX;
var _dragElement;//Variable globar para elemento arrastrado
setTimeout(() => {
    //Obtener elementos que serán arrastrables
    let drags = document.querySelectorAll('.dragItem');
    let drops = document.querySelectorAll('.dropItem');

    [].forEach.call(drags, elem => {
        elem.setAttribute('draggable', 'true');
        elem.addEventListener('dragstart', dragStartFn, false);
        elem.addEventListener('dragend', dragEndFn, false);
    });

    [].forEach.call(drops, elem => {
        let minutesColumn = elem.querySelectorAll('.minutesColumn');
        [].forEach.call(minutesColumn, minutes => {
            let wth = $(minutes).width();


            for (let it = 0; it < 5; it++) {
                let grid = document.createElement('div');
                grid.style.width = '20%';
                grid.className = 'minuteColGrid';
                grid.addEventListener('drop', dropFn, false);
                grid.addEventListener('dragenter', dragEnterFn, false);
                grid.addEventListener('dragleave', dragLeaveFn, false);
                grid.addEventListener('dragover',function(event){event.preventDefault();},false);
                minutes.appendChild(grid);
            }

        });
    });


}, (1));

function dragStartFn(event) {
    console.info('Drag me like you mean it! XD');
    console.log(this);
    console.log(event);

    this.style.opacity = '0.3';
    _dragElement = this.parent;
}


function dragEndFn(event) {
    this.style.opacity = '1';
    event.dataTransfereffectAllowed = 'move';
    event.dataTransfer.setData('text/html', _dragElement);
}

function dragEnterFn() {
    console.info('Over drop zone');
    console.log(this);
    this.style.borderstyle = 'dashed';
    this.style.borderwidth = '1px';
}

function dragLeaveFn() {
    console.info('Over drop zone');
    this.style.borderstyle = 'none';
}


function dropFn(event) {
    try{
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        console.info('Drop the bomb xdddd');
        console.log(this);
        console.log(event);
        
        if(_dragElement.children.length < 2){
            let resize = document.createElement('div');
            resize.className = 'resize';
            resize.addEventListener('mousedown',initResizeFn,false);
            _dragElement.appendChild(resize);
        }
        this.insertBefore(_dragElement, this.firstChild);
    }
    catch(exception){
        _dragElement = null;
        console.error(exception);
    }
    let actual = this;
    actual.style.backgroundColor = 'red';
    setTimeout(function(){
        actual.style.backgroundColor = 'white';
    },3000);
}

function initResizeFn(event){
    console.log('init resize');
    window.addEventListener('mousemove', resizeFn, false);
    window.addEventListener('mouseup', stopResizeFn, false);
}
//Validar que sea el elemento al que se esta haciendo el resize
function resizeFn(event){
    console.log()
    // let parent = this.parent;
    console.log('resize');
    console.log(event);
    // parent.style.width = ((event.clientX - parent.offsetLeft) + 'px');
}

function stopResizeFn(event){
    window.removeEventListener('mousemove', resizeFn, false);
    window.removeEventListener('mouseup', stopResizeFn, false);
}