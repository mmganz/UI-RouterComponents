(function() {

	var app = angular.module('affiliates');	

	app.component('profile', {
		templateUrl: '/components/profile.html',
		controller: profileController,
		controllerAs: 'pc'
	});

	profileController.$inject = ['$state', '$stateParams', 'dataService'];

	function profileController($state, $stateParams, dataService) {
		
		var pc = this;
		var affiliateId = $stateParams.affiliateId;

		var affiliate = dataService.getData().find(function (item) {
			return item.id === affiliateId;
		});

		pc.fullName = affiliate.firstName + ' ' + affiliate.lastName;

		pc.showAffiliates = function () {
			//$state.go('list');
			$state.go('profile', { affiliateId: 'b4fa3772-674e-4072-8dda-35b9a0e3c43e' });
		};
	}

})();