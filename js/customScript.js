'use strict';

angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });



// $(document).ready(function(){
//     xd();
// var x =0,y=0;

// var elements = document.getElementsByClassName('dragndrop_zone');

// var element = document.getElementById('uni');
// console.log('element.parentNode');
// console.log($(element.parentNode).data('tecnico'));

// var xdd = $(element.parentNode).data('tecnico');
// var elementoPadre = document.getElementById(xdd);

//     interact(element).draggable({
//         snap: {
//             targets: [
//                 interact.createSnapGrid({ x: 5, y: 5 })
//             ],
//             range: Infinity,
//             relativePoints: [ { x: 0, y: 0 } ]
//         },
//         inertia: true,
//         restrict: {
//             restriction: elementoPadre,
//             elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
//             endOnly: true
//         }
//     }).on('dragmove', function (event) {
//         x += event.dx;
//         y += event.dy;
//         event.target.style.webkitTransform = event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
//     });
// });


// function xd(){
//     var horas = 12;
//     var minutos = 5;
//     var totales = horas*minutos;
//     var contenido = '';
// for(var y =0;y<2;y++)
// {
//     contenido +='<tr id='+(0 === y?"tecnico1":"")+'>';
//     for(var x=0;x<totales;x++)
//     {
//         contenido += '<td class="dragndrop_zone"></td>';
//     }
//     contenido += '</tr>';
// }
//     $("#tableHorarios").html(contenido);
// }




// $.each(elements,function(ind,element){
//     interact(element)
//   .draggable({
//     snap: {
//       targets: [
//         interact.createSnapGrid({ x: 20, y: 20 })
//       ],
//       range: Infinity,
//       relativePoints: [ { x: 0, y: 0 } ]
//     },
//     inertia: true,
//     restrict: {
//       restriction: element.parentNode,
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
//       endOnly: true
//     }
//   })
//   .on('dragmove', function (event) {
//     x += event.dx;
//     y += event.dy;

//     event.target.style.webkitTransform =
//     event.target.style.transform =
//         'translate(' + x + 'px, ' + y + 'px)';
//   });
// });

