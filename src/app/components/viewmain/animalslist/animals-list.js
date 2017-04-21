(function (angular) {

  angular.module('app').component('animalsList', {
    templateUrl: 'app/components/viewmain/animalsList/animals-list.html',
    controller: ['animalsFactory', animalsList],
    controllerAs: 'animalsList'
  });

  function animalsList(animalsFactory) {
    var vm = this;

    vm.$onInit = function () {
      vm.allAnimals = animalsFactory.getAllAnimals();
    };
    vm.showDetail = function () {
      //Aqui vamos a la vista detalle
      
      console.log('DETALLEEEEEEE');
    };
  }

})(angular);