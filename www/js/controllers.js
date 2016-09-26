angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope) {


  $scope.test="I am ehre!";
})

.controller('FeedCtrl', function($scope) {
   
})

.controller('DashCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
