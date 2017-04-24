(function (angular) {

  angular.module('app').component('animalsList', {
    templateUrl: 'app/components/viewmain/animalsList/animals-list.html',
    controller: ['$state','animalsFactory', animalsList],
    controllerAs: 'animalsList'
  });

  function animalsList($state,animalsFactory) {
    var vm = this;

    vm.$onInit = function () {
      vm.allAnimals = animalsFactory.getAllAnimals();
      vm.currentPosition = 'up';
    };
    vm.goToDetail = function (_idAnimal_) {
      //Aqui vamos a la vista detalle
      
      
      $state.go('detail',{idAnimal:_idAnimal_});
      
    };
    vm.sortList = function(_position_) {
      if ( _position_ !== vm.currentPosition ) {
        vm.allAnimals.reverse();
        vm.currentPosition = _position_;
      }
    };
  }

})(angular);