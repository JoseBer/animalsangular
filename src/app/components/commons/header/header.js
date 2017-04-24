(function(angular) {

  angular.module('app').component('myHeader', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/commons/header/header.html',
    // en controller definimos la función que escribimos abajo
    controller:['$state', controladorHeader],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'myHeader'
  });

  /* En esta función escribimos la lógica del controlador */
  function controladorHeader($state) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
        console.log('cargo cabecera');
        vm.title="TIENDA DE ANIMALES RAROS COMO EL ORNITORRINCO";
    }
    vm.goToHome=function (){
      $state.go('main');
    }
  }
     


})(angular);