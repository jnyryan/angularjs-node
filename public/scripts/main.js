var myApp = angular.module('myApp', []);

myApp.factory('SomeTestData', function(){

    var TestData = {};
    TestData.items = [
    { name: "John Ryan", position: "Da Bozz" },
    { name: "Frank", position: "Engineer" },
    { name: "Jim", position: "Chef" },
    { name: "George", position: "Chef" },
	{ name: "Bill", position: "Engineer" },
	{ name: "Chichen", position: "Engineer" },
	{ name: "Dude", position: "Engineer" },
	{ name: "Dudette", position: "Chef" },
	{ name: "Georgeette", position: "Secretary" },
	{ name: "Fran", position: "Secretary" },
    ]
    return TestData;
})

function TestDataCtrl($scope, SomeTestData){
  $scope.someTestData = SomeTestData;
}
