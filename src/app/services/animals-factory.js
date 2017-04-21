(function(angular) {

  angular.module('app').factory('animalsFactory', [animalsFactory]);

  function animalsFactory() {
    var module = {};
    var self = module;

    var allAnimals = [
        {id: 0, name: 'Ornitorrincos'},
        {id: 1, name: 'Dragones'},
        {id: 2, name: 'Lechones'},
        {id: 3, name: 'Borregos'},
        
    ];

    module.getAllAnimals = function() {
        return allAnimals;
    };

    return module;
  };

})(angular);