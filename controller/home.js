var guitarapp=angular.module('guitarapp',["ui.router"]);

	guitarapp.controller('ictrl',function($scope,$http,$location,selecteddata){
	   	$scope.info=[];
	   	$scope.slides = [ '../img/blackGuitar.png' ,
	   					  '../img/darkWoodGuitar.png' ,
	   					  '../img/eastWoodGuitar.png',
	   					  '../img/westWoodGuitar.png',
	   					  '../img/memorialGuitar.png',
	   					  '../img/WoodenColorGuitar.png'];
  		$scope.index=0;			//index value for slides intialize to zero for slides

    $scope.next=function(){		//fuction for next button
	  	if($scope.index==$scope.slides.length-1){
	  	 	$scope.index=-1;
	  	 }
	  	 $scope.index+=1;			//increment the index values
	  	 $scope.slide=$scope.slides[$scope.index];
	  	 $scope.val=false;			//Hide the product info div
	  	 $scope.sval=false;			//Hide the shipping info div
	  	 $scope.cval=false;			//Hide the cust review info div
    }

  	$scope.previous=function(){			//function for previous button
  		if($scope.index<1){
  	 		$scope.index=$scope.slides.length;
  	 	}
	  	 $scope.index-=1;				//decrement the index value
	  	 $scope.slide=$scope.slides[$scope.index];
	  	 $scope.val=false;
	  	 $scope.sval=false;
	  	 $scope.cval=false;

    }

 	 $scope.pinfo=function(){			//function for pruduct info div
  		if($scope.val==false){
  			$scope.val=true;
  		}
  		else{
  			$scope.val=false;
  		}
  	}

  	$scope.sinfo=function(){			//function for shipping info div
  		if($scope.sval==false){
  			$scope.sval=true;
  		}
  		else{
  			$scope.sval=false;
  		}
  	}

 	$scope.cinfo=function(){		//function for custmore info div
  		if($scope.cval==false){
  			$scope.cval=true;
  		}
  		else{
  			$scope.cval=false;
  		}
    }

  	$http.get('guitardata.json')			//http request to get jason Data
		.success(function(rest){
			/*function to share data from services and also it will share data
			 	by index value of the pictures to the info array.*/
				$scope.info1=function(){
					switch($scope.index){  //switch case to check index value of slides
						case 0:
						$scope.info=rest.allProducts[0];
						selecteddata.name1 = $scope.info;
						break;

						case 1:
						$scope.info=rest.allProducts[1];
						selecteddata.name1 = $scope.info;
						break;

						case 2:
						$scope.info=rest.allProducts[2];
						selecteddata.name1 = $scope.info;
						break;

						case 3:
						$scope.info=rest.allProducts[3];
						selecteddata.name1 = $scope.info;
						break;

						case 4:
						$scope.info=rest.allProducts[4];
						selecteddata.name1 = $scope.info;
						break;

						case 5:
						$scope.info=rest.allProducts[5];
						selecteddata.name1 = $scope.info;
						break;

						case 6:
						$scope.info=rest.allProducts[6];
						selecteddata.name1 = $scope.info;
						break;

					}
				}
		})

		$scope.purchase=function(){
	   		$location.path('/purchase');		//change url path on click of buy button.
	   		selecteddata.name=$scope.slides[$scope.index];	//share data using 'selecteddata' service.
	   	}
	});
