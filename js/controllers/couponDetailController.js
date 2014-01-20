app.controller('couponDetailController', [
  '$scope', 'couponService',
  function($scope, couponService) {
    $scope.coupons = couponService.getCoupons().coupons;
  }
]);