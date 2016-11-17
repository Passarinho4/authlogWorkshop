'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: "vm"
        });
    }])

    .controller('View1Ctrl', ['$http', function ($http) {
        var vm = this;

        vm.credentialsLogin = credentialsLogin;

        function credentialsLogin() {
            alert("Login: " + vm.login + " Password: " + vm.password);

            $http.get(
                "http://tegess.com:8085/api/login/credentials?appId=582ccd5846e0fb00012be767",
                {headers: {"Authorization": btoa(vm.login + ":" + vm.password)}}
            ).then(
                function onSuccess(response) {
                    console.log(response.data.token);
                },
                function onFailure(data) {
                    console.log(data);
                }
            )
        }

    }]);