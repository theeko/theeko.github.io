var app = angular.module("myApp", []);

app.directive("icons", function(){
    return {
        restrict: "E",
        templateUrl: "icons.html",
    };
});