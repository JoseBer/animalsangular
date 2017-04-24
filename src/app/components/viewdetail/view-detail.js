(function (angular) {

  angular.module('app').component('viewDetail', {
    templateUrl: 'app/components/viewdetail/view-detail.html',
    controller: ['$stateParams', viewDetail],
    controllerAs: 'viewDetail'
  });

  function viewDetail($stateParams) {
    var vm = this;

    vm.$onInit = function () {
      var idAnimal = $stateParams.idAnimal;
      console.log('El animal es:', idAnimal);
    }


  }
})(angular);