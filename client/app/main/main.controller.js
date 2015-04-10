'use strict';

angular.module('mongoWebQueryApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    //$http.get('/api/query').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //});

    $scope.search = function() {
      if($scope.keyword === '') {
        return;
      }

      $http.post('/api/query', { keyword: $scope.keyword }).success(function(data) {
          $scope.data = data;
      });
    };

    $scope.export = function(item) {
      
    };
  });
