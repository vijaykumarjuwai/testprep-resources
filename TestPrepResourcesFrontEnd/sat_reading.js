var app = angular.module('myApp', []);
app.controller('satReadingCtrl', function($scope, $http) {


    $http.get("http://127.0.0.1:3000/tests.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
        console.log($scope.myWelcome[0].testtype)

    });

    $http.get("http://127.0.0.1:3000/testinstances.json")
    .then(function(response) {
        $scope.testInstances = response.data;
        console.log($scope.testInstances);
    });

    $http.get("http://127.0.0.1:3000/testsections.json")
    .then(function(response){
        $scope.testSections = response.data;
        console.log("testSections", $scope.testSections);

    });

});