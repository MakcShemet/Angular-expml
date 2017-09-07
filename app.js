angular.module("myApp", [])
.controller("firstCtrl", function($scope){
	//Переменная для формы
	$scope.tempInput = "Тест";
	
	//Переменная для кнопки
	
	
	//Хранилище данных из формы
	$scope.taskArray = [];
	
	//Функция добавления в хранилище данных из формы и смены кнопки
	$scope.newBtn = function() {
		if($scope.tempInput){
			$scope.taskArray.push($scope.tempInput);
						$scope.tempInput = "";
		}
		else {
			consol.log('В инпуте пусто');
		}
	}
	
});