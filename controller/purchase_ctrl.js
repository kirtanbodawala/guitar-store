guitarapp.controller('pctrl',function($scope,$location,selecteddata){
	   	$scope.pur=true;		//shows by default purchase form
	   	$scope.review1=true;	//default- hides the review div
		
		/*get values from the services
			and store in arrays*/
		$scope.selected = selecteddata.name1;	//data of json file	
		$scope.path=selecteddata.name;			//variable to display selected guitar

	   	$scope.review=function(){
	   			$scope.pur=false;
	   			$scope.review1=false;
	   			//selecteddata.firstname= $scope.fname;
	   	}


	   	$scope.edit=function(){
	   			$scope.pur=true;		//shows purchase form
	   			$scope.review1=true;	//hides the review div
	   	}

	   	$scope.confirm=function(){
	   			$location.path('/confirm');	//go to confirmation page on click of confirmation button
	   			
	   			/*set values in services which will be use in 
	   					confirmation page*/
	   			selecteddata.firstname=  $scope.fname;
	   			selecteddata.lastname=  $scope.lname;
	   			selecteddata.address=  $scope.address;
	   			selecteddata.zcode=  $scope.zipcode;
	   			selecteddata.phno=  $scope.phone;
	   	}
});

	   