(function(angular) {

  angular.module('app').component('animalsCard', {
    templateUrl:  'app/components/viewmain/animalscard/animals-card.html',
    controller: animalsCard,
    controllerAs: 'animalsCard',
    bindings: {
      itemAnimal: '<'
    }
  });

  function animalsCard() {
    var vm = this;
  }

})(angular);
