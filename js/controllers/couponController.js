app.controller('couponController', [
  '$scope', 'couponService',
  function($scope, couponService) {
    $scope.coupons = couponService.getCoupons().coupons;

    $scope.openCoupon = function(cid){
    	
		}
  }
]);