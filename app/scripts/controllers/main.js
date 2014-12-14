'use strict';

/**
 * @ngdoc function
 * @name nobelLaureateSpike.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nobelLaureateSpike
 */
angular.module('nobelLaureateSpike')
  .controller('MainCtrl', [ '$scope', '$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder', function ($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
    
    
    /*
  	var laureatesResource = $resource('http://api.nobelprize.org/v1/laureates.json', {'callback':'JSON_CALLBACK'}, {
							  		get : {
							  			method: "JSONP"
							  		}
								});

  	laureatesResource.get(function(data){
		  					$scope.laureates = data;
		  					
	},function(request){
		console.log('request error for laureates');
	});
	*/
	$scope.laureates = {};
	$scope.prizes = [];
	$scope.affiliations = [];
	var laureatesResource = $resource('data/laureates.json');
  	laureatesResource.get(function(data){
		$scope.laureates = data["laureates"];

		// Loop Over Laureates
		angular.forEach($scope.laureates, function(laureate){
			var prize = laureate.prizes;

			// Loop Over Prize
			angular.forEach(prize, function(info){
				var affiliations = info.affiliations;
				
				var prizeInfo = {};
				prizeInfo.id = laureate.id;
				prizeInfo.firstname = laureate.firstname;
				prizeInfo.surname = laureate.surname;
				prizeInfo.year = info.year;
				prizeInfo.category = info.category;
				prizeInfo.share = info.share;
				prizeInfo.motivation = info.motivation;
				$scope.prizes.push(prizeInfo);

				// Loop Over A ffiliations
				angular.forEach(affiliations, function(affiliationInfo){
					var affiliation = {};
					affiliation.id = laureate.id;
					affiliation.firstname = laureate.firstname;
					affiliation.surname = laureate.surname;
					affiliation.name = affiliationInfo.name;
					affiliation.city = affiliationInfo.city;
					affiliation.country = affiliationInfo.country;
					$scope.affiliations.push(affiliation)
				});

			});
		});

	},function(request){
		console.log('request error for laureates');
	});


  	$scope.dtOptionsLaureates = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10);
    $scope.dtColumnDefsLaureates = [
        DTColumnDefBuilder.newColumnDef(0).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(1).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(2).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(3).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(4).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(5).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(6).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(7).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(8).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(9).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(10).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(11).withOption('sDefaultContent', 'N/A')
    ];

    $scope.dtOptionsPrizes = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10);
    $scope.dtColumnDefsPrizes = [
        DTColumnDefBuilder.newColumnDef(0).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(1).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(2).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(3).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(4).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(5).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(6).withOption('sDefaultContent', 'N/A')
    ];

    $scope.dtOptionsAffil = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10);
    $scope.dtColumnDefsAffil = [
        DTColumnDefBuilder.newColumnDef(0).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(1).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(2).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(3).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(4).withOption('sDefaultContent', 'N/A'),
        DTColumnDefBuilder.newColumnDef(5).withOption('sDefaultContent', 'N/A')
        
    ];

  }]);
