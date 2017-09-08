angular.module("myApp", []).controller("firstCtrl", function($scope){
	
	//Переменная "имя"
	$scope.nameUse = "";
	
	//Массив для добавления имен
	$scope.nameArray = [];

	$scope.newButton = "ДОБАВИТЬ";

	//Функция добавления имени в массив
	$scope.addName = function(){
		if($scope.nameUse){
			$scope.nameArray.push($scope.nameUse);
			$scope.nameUse = "";
			$scope.newButton = "ДОБАВЛЕНО";
		}
		else{
			console.log("Поле имени пустое");
		}
	}

	$scope.deleteItem = function(item){
		var index = $scope.nameArray.indexOf(item);
		console.log(item);
		$scope.nameArray.splice(index, 1);
		$scope.newButton = "ДОБАВИТЬ";

	}

})