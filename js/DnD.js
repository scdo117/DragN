//ClassNmae para draggable = dragItem
//droppable = dropItem
'use strict';
var _relativePositionX;
var _dragElement;//Variable globar para elemento arrastrado
var startX, startY, startWidth, startHeight;
var _pResize;
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
                grid.addEventListener('dragover', function (event) { event.preventDefault(); }, false);
                minutes.appendChild(grid);
            }
        });
    });

}, (1));

function dragStartFn(event) {
    // console.info('Drag me like you mean it! XD');
    // console.log(this.parentElement);
    // console.log(event);

    this.parentElement.style.opacity = '0.3';
    event.dragIcon = this.parentElement;
    _dragElement = this.parentElement;
    // console.log('_dragElement');
    // console.log(_dragElement);
}


function dragEndFn(event) {
    this.parentElement.style.opacity = '1';
    event.dataTransfereffectAllowed = 'move';
    event.dataTransfer.setData('text/html', _dragElement);
}

function dragEnterFn() {
    // console.info('Over drop zone');
    // console.log(this);
    this.style.borderStyle = 'dashed';
    this.style.borderWidth = '1px';
}

function dragLeaveFn() {
    // console.info('Bye drop zone');
    this.style.borderStyle = 'none';

}

function dropFn(event) {
    try {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        // console.info('Drop the bomb xdddd');
        // console.log(this);
        // console.log(event);
        if (_dragElement.children.length < 2) {
            let resize = document.createElement('div');
            resize.className = 'resize';
            resize.addEventListener('mousedown', initResizeFn, false);
            _dragElement.appendChild(resize);
        }
        this.insertBefore(_dragElement, this.firstChild);
    }
    catch (exception) {
        _dragElement = null;
        console.error(exception);
    }
    let actual = this;
    actual.style.backgroundColor = 'red';
    setTimeout(function () {
        actual.style.backgroundColor = 'white';
        actual.style.borderStyle = "none";
    }, 3000);
}

function initResizeFn(e) {
    console.log('init resize');
    console.log(e);
    if (e.stopPropagation)
        e.stopPropagation();
    _pResize = this.parentElement;
    startX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(_pResize).width, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    _pResize.style.width = (startWidth + e.clientX - startX) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}