'use strict';

angular.module('app', ['ngMessages'])
    .controller('DynFormCtrl', function ($scope, $http, $timeout) {

        var urlDesc = 'https://api.mongolab.com/api/1/databases/forms/collections/forms/51669d15e4b04a20de65fc58?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
        var urlSave = 'https://api.mongolab.com/api/1/databases/forms/collections/data?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

        $http.get(urlDesc).success(function(data, status) {
            $scope.fields = data.fields;
        });

        $scope.user = {};

        $scope.save = function() {
            $scope.waiting = true;
            $http.post(urlSave, $scope.user).success(function() {
                $scope.waiting = false;
                $scope.message = "Utilisateur enregistré";
                $timeout(function() {
                    $scope.message = "";
                }, 3000)
            }).error(function() {
                $scope.waiting = false;
            });
        }
    });

