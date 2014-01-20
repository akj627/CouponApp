   app.factory('couponService', function() {
      var retObj = {
      currentCoupon: {},
      coupons:[]
    };

     var getCoupons = function() {
      retObj.coupons = [{
           retailer: 'StarBucks',
           disc: '20',
           retailerType: 'Coffehouse',
           minBuy: '100',
           code: 'ABC12345',
           id: 1
         }, {
           retailer: 'ExxonMobil',
           disc: '10',
           retailerType: 'Gas Station',
           minBuy: '50',
           code: 'ABC12345',
           id: 2
         }, {
           retailer: 'Shop-Rite',
           retailerType: 'Grocery',
           disc: '20',
           minBuy: '50',
           code: 'DEF12345',
           id: 3
         }, {
           retailer: 'StopNShop',
           retailerType: 'Grocery',
           disc: '15',
           minBuy: '100',
           code: 'POI198345',
           id: 10
         }, {
           retailer: 'Macy\'s',
           disc: '20',
           retailerType: 'Department Store',
           minBuy: '100',
           code: 'MNTY12934345',
           id: 5
         }, {
           retailer: 'Nordstorm',
           disc: '20',
           retailerType: 'Upscale Fashion',
           minBuy: '150',
           code: 'HGARD17345',
           id: 6
         }, {
           retailer: 'JCPenney',
           retailerType: 'Department Store',
           disc: '20',
           minBuy: '120',
           code: 'THYRA50164',
           id: 7
         }];
     };
     return retObj;
   });