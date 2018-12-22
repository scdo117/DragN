var Tecnico = {};
    Vue.component('div-tecnico', {
        template: '<div class="Tecnico col-md-1">{{Tecnico.Nombre}}</div>',
        data: function () {
            return {
                Tecnico: {
                    Nombre: 'Eugenio'
                }
            }
        }
    });
    
    Vue.component('column-hora', {
        props: {
            horadia: String,
            firstset: String,
            displayencabezado: String
        },
        template: '<div class="hourColumn col-md-1" :data-hora="horadia"><div class="row encabezado displayEncabezado" ><div class="minutesHeader"></div><div class="minutesHeader"></div><div class="minutesHeader "><div class="float-right"><span class="oneDot"></span></div></div><div class="minutesHeader"></div><div class="minutesHeader"></div><div class="minutesHeader"><div class="float-right"><span class="twoDots"></span></div></div><div class="minutesHeader"></div><div class="minutesHeader"></div><div class="minutesHeader"><div class="pull-right"><span class="threeDots"></span></div></div><div class="minutesHeader "></div><div class="minutesHeader "></div><div class="minutesHeader "><span class="spanHour">{{ horadia }}</span></div></div><div class="row planeado dropItem" ><div class="minutesColumn"></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn  halfHourColumn"></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn  fullHourColumn"></div></div><div class="row trabajado bottom-hour"><div :class="firstset" class="minutesColumn"></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn "></div><div class="minutesColumn  halfHourColumn"></div><div class="minutesColumn "></div><div class="minutesColumn"></div><div class="minutesColumn"></div><div class="minutesColumn"></div><div class="minutesColumn"></div><div class="minutesColumn fullHourColumn"></div></div></div>',  
    });
    
    Vue.component('elem-orden', {
        template: '<div class="ordenTrabajo"><div class="dragItem"></div>trabajo pendiente 1</div>'
    });
    
    
    window.onload = function () {
        var vm = new Vue({
            el: '#appIndex',
        });
    }    