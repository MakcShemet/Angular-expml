angular.module("myApp", []).controller("firstCtrl", function($scope){
	
	//Переменная "имя"
	$scope.nameUse = "";
	
	//Массив для добавления имен
	$scope.nameArray = [];

	//Содержание кнопки
	$scope.newButton = "ДОБАВИТЬ";

	//Класс для измененной кнопки
	//var quest = angular.element(document.querySelector(".btn-primary "));

	//Функция добавления имени в массив
	$scope.addName = function(){
		if($scope.nameUse){
			$scope.nameArray.push($scope.nameUse);
			$scope.nameUse = "";
			$scope.newButton = "ДОБАВЛЕНО";
			var quest = angular.element('.btn-primary').css('background-color', 'orange');
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