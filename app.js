angular.module("myApp", []).controller("firstCtrl", function($scope){
	
	//Переменная "имя"
	$scope.nameUse = "";
	
	//Массив для добавления имен
	$scope.nameArray = [];

	//Содержание кнопки
	$scope.newButton = "ДОБАВИТЬ";

	//Кнопка очистки input
	$scope.clearBtn = "x";
	
	//Функция добавления имени в массив
	$scope.addName = function(){
		if($scope.nameUse){
			$scope.nameArray.push($scope.nameUse);
			$scope.nameUse = "";
			$scope.newButton = "ДОБАВЛЕНО";
			document.getElementById('btn1').style.backgroundColor="orange";
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
		document.getElementById('btn1').style.backgroundColor="#337ab7";

	}

})