(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/viewdetail/view-detail.html',
    controller: viewDetail,
    controllerAs: 'viewDetail'
  });

  function viewDetail() {
    var vm = this;
  }

})(angular);