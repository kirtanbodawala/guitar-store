guitarapp.controller('cctrl',function($scope,$location,selecteddata){
	   		
	   	//set the values from the services and display it on page
	   	$scope.ipath=selecteddata.name;
	   	$scope.amount=selecteddata.name1;
	   	$scope.first=selecteddata.firstname;
	   	$scope.last=selecteddata.lastname;
	   	$scope.adrs=selecteddata.address;
	   	$scope.zcode=selecteddata.zcode;
	   	$scope.pno=selecteddata.phno;

	   	$scope.home=function(){
	   			$location.path('/home');		//Go back to home page
	   	}
});