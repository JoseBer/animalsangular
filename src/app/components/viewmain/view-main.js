(function (angular) {

    angular.module('app').component('viewMain', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/viewMain/view-main.html',
        // en controller definimos la función que escribimos abajo
        controller: controladorViewMain,
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'viewMain'
    });

    /* En esta función escribimos la lógica del controlador */
    function controladorViewMain() {
        /* Cacheamos this para evitar rarismos */
        var vm = this;
    }
   



})(angular);