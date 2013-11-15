var myApp = angular.module('myApp', []);

myApp.factory('EmplayeeData', function(){

    var myDataList = {};
    var myDataList.items = [
    { name: "a", position: "ddd" },
    { name: "s", position: "ddd" },
    { name: "d", position: "ddd" },
    { name: "f", position: "sss" }
    ]
    return myDataList;
})

function EmployeeDataCtrl($scope, EmployeeData){
  $scope.employees = EmployeeData;
}
