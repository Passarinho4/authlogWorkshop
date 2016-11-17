'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: "vm"
        });
    }])

    .controller('View1Ctrl', ['$http', "TokenStorage", function ($http, TokenStorage) {
        var vm = this;

        vm.credentialsLogin = credentialsLogin;
        vm.logout = logout;
        vm.testApi = testApi;

        function credentialsLogin() {
            alert("Login: " + vm.login + " Password: " + vm.password);

            $http.get(
                "http://tegess.com:8085/api/login/credentials?appId=582ccd5846e0fb00012be767",
                {headers: {"Authorization": btoa(vm.login + ":" + vm.password)}}
            ).then(
                function onSuccess(response) {
                    console.log(response.data.token);
                    TokenStorage.store(response.data.token);
                },
                function onFailure(response) {
                    console.log(response);
                }
            )
        }

        function testApi() {

            $http.get("http://localhost:8888/api/helloWorld").then(
                function onSuccess(response) {
                    console.log(response.data);
                },
                function onFailure(response) {
                    console.log(response);
                }
            )

        }

        function logout() {
            TokenStorage.clear();
        }

    }]);