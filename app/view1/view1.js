'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: "vm"
  });
}])

.controller('View1Ctrl', [function() {
  var vm = this;

  vm.credentialsLogin = credentialsLogin;

  function credentialsLogin() {
    alert("Login: " + vm.login + " Password: " + vm.password);
  }

}]);