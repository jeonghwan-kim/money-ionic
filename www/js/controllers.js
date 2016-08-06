angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, yearMonth) {
  $scope.data = yearMonth.query();
})

.controller('AddCtrl', function($scope, Chats) {
})

.controller('MainDetailCtrl', function($scope, $stateParams, expenses) {
  $scope.data = expenses.query();
  $scope.remove = function (id) {
    expenses.remove(id);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
