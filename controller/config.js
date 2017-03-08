guitarapp.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {			//By default Home page
				url:'/home',
				templateUrl: 'home.html',
				controller: 'ictrl'
			})

			.state('purchase', {		//Navigate to purchase page
				url:'/purchase',
				templateUrl: 'purchase.html',
				controller: 'pctrl'
			})
			
			.state('confirm', {			//Navigate to confirm page
				url:'/confirm',
				templateUrl: 'confirm.html',
				controller: 'cctrl'
			})

		});