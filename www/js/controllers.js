angular.module('starter.controllers', ['nvd3'])

.controller('DashCtrl', function($scope) {})

.controller('DogsCtrl', function($scope, Dogs) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.dogs = Dogs.all();
  $scope.remove = function(dog) {
    Dogs.remove(dog);
  };
})

.controller('DogDetailCtrl', function($scope, $stateParams, Dogs) {
  $scope.dog = Dogs.get($stateParams.dogId);
})


.controller('CatCtrl', function($scope, Cats) {
    $scope.cats = Cats.all();
    $scope.remove = function(cat){
        Cats.remove(cat);
    };
})

.controller('CatDetailCtrl', function($scope, $stateParams, Cats) {
  $scope.cat = Cats.get($stateParams.catId);
})

.controller('SmallAnimalsCtrl', function($scope, SmallAnimals) {
  $scope.smallAnimals = SmallAnimals.all();
    $scope.remove = function(smallAnimal){
        SmallAnimals.remove(smallAnimal);
  };
})

.controller('SmallAnimalDetailCtrl', function($scope, $stateParams, SmallAnimals) {
  $scope.smallAnimal = SmallAnimals.get($stateParams.smallAnimalId);
})

;
