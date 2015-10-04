'use strict';
'format es6';

import moduleName from '../name';

var deepAsset = DeepFramework.Kernel.container.get('asset');
var routes = {
  app: {
    url: '',
    controller: 'DeepNgToDoController',
    controllerAs: 'todoCtrl',
    templateUrl: deepAsset.locate('@deep.ng.todo:js/app/angular/views/todo.html')
  },
};

class Config {
  constructor($stateProvider) {
    /* Define application level routes */
    let stateNames = Object.keys(routes);
    angular.forEach(stateNames, function routesRegister(stateName) {
      $stateProvider.state(stateName, routes[stateName]);
    });
  }
}

angular.module(moduleName).config(['$stateProvider', function(...args) {
  return new Config(...args);
},]);

export default routes;

