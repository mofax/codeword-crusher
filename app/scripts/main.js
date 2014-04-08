var MainController = function($scope){
	var t  = {};
	t.elem = document.getElementById('american-english');
	t.o = t.elem.innerHTML.split(' ');

	$scope.dict = t.o;
	$scope.tempDict = [];

	/**
	 * function compute, to compute the filters
	 */
	$scope.compute = function(){

		commander = $scope;

		if(commander.len){
			console.log(commander.len.toString() + " letter words");
			for(var i = 0; i<$scope.dict.length; i++){
				if($scope.dict[i].length == parseInt(commander.len)){
					$scope.tempDict.push($scope.dict[i]);
				}
			}
			$scope.dict = $scope.tempDict;
			$scope.tempDict = [];
		}

		if(commander.startLetter){
			console.log("starting with: " + commander.startLetter)
			for(var i = 0; i<$scope.dict.length; i++){
				if($scope.dict[i].indexOf(commander.startLetter) === 0){
					$scope.tempDict.push($scope.dict[i]);
				}
			}

			$scope.dict = $scope.tempDict;
			$scope.tempDict = [];
		}

		if(commander.endLetter){
			console.log("ending with: " + commander.endLetter)
			for(var i = 0; i<$scope.dict.length; i++){
				if($scope.dict[i].match(commander.endLetter + "$") == commander.endLetter){
					$scope.tempDict.push($scope.dict[i]);
				}
			}

			$scope.dict = $scope.tempDict;
			$scope.tempDict = [];
		}

		if(commander.letterSomewhere){
			var arr = commander.letterSomewhere.split(',');
			console.log(arr);
			pos = arr[0],
			_char = arr[1];
			for(var i = 0; i<$scope.dict.length; i++){
				if($scope.dict[i].indexOf(_char) == pos - 1){
					$scope.tempDict.push($scope.dict[i]);
				}
			}

			$scope.dict = $scope.tempDict;
			$scope.tempDict = [];
		}

		$scope.displayBox = $scope.dict.join(' ');
		$scope.dict = t.o;
	}
}