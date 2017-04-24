(function(angular) {

  angular.module('app').component('myFooter', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/commons/footer/footer.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state',controladorFooter],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'myFooter'
  });

  /* En esta función escribimos la lógica del controlador */
  function controladorFooter($state) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
        console.log("cargo el footer");
        vm.footer="Derechos reservados pal primero que compre";

    }
    vm.goToAbout=function (){
      $state.go('aboutUs');
    }
  }
     


})(angular);