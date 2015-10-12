(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function($scope){
    this.products = gems;
    this.product = "";
    $scope.showMode = false;
    
    $scope.create = function () {
        //$scope.product
            console.log('create' + $scope.product.name);
            $('#saveProductModal').modal('hide'); 
    };
    
    $scope.clear = function(){
        this.product = "";
        $scope.showMode = false;
    };
    
    $scope.update = function (id) {
        $scope.showMode = false;
        console.log('Updating...');
                $scope.product = gems[id];
                $('#saveProductModal').modal('show');            
    };
    
    $scope.remove = function (id) {
            //BillType.get({id: id}, function(result) {
             //   $scope.billType = result;
                $('#deleteProductConfirmation').modal('show');
            //});
    };
        
    $scope.confirmDelete = function (id) {
           // BillType.delete({id: id},
             //   function () {
               //     $scope.loadAll();
                    $('#deleteProductConfirmation').modal('hide');
                //    $scope.clear();
              //  });
    };
    
    $scope.showProduct = function (id) {
        $scope.clear();
        $scope.showMode = true;
        $scope.product = gems[id];
        $('#saveProductModal').modal('show');
    };
  });

 var gems = [
    { id:0, name: 'Azurite', price: 2.95 },
    { id:1, name: 'Bloodstone', price: 5.25 },
    { id:2, name: 'Zircon', price: 3.95 },
  ];
})();
