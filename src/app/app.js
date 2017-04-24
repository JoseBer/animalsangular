'use strict';

(function(angular) {
  /* Declaramos el módulo */
    
  angular.module('app', ['ui.router']);

  angular.module('app').config(['$stateProvider','$urlRouterProvider',appConfig]);
  
  function appConfig($stateProvider,$urlRouterProvider){
    var main ={
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };
    var detail ={
      name: 'detail',
      url: '/detail/:idAnimal',
      param: {
        idAnimal:{squash: true, value:null}
      },
      template: '<view-detail></view-detail>'
    };
    var about={
      name :'aboutUs',
      url: '/aboutUs',
      template: '<h3>About Us:work in progress<h3>'
    }

    /*Se asignan los estados al Provider*/
    $stateProvider.state(main);
    $stateProvider.state(detail);
    $stateProvider.state(about);


    /*la ruta por defecto sera main*/
    $urlRouterProvider.otherwise('/main');    
  }

})(angular);