angular.module("myApp", [])
.controller("firstCtrl", function($scope){
	//Переменная для формы
	$scope.tempInput = "";
	
	//Переменная для кнопки
	$scope.oldBtn = "GET A SHORT INTERNET NUMBER";
	
	//Хранилище данных из формы
	$scope.taskArray = [];
	
	//Функция добавления в хранилище данных из формы и смены кнопки
	$scope.newBtn = function() {
		if($scope.tempInput){
			$scope.taskArray.push($scope.tempInput);
			$scope.tempInput = "";
			$scope.oldBtn = "YOUR SHORT NUMBER IS RESERVED";
			$("#btn1").addClass("ma-btn-orange");
			$(":text").css("width", "100%");
			$("#backRound").css("display", "none");
		}
		else {
			alert('В инпуте пусто');
		}
	}

	$scope.deleteItem = function(item){
		var index = $scope.taskArray.indexOf(item);
		console.log(item);
		$scope.taskArray.splice(index, 1);
		$scope.oldBtn = "GET A SHORT INTERNET NUMBER";
		$("#btn1").removeClass("ma-btn-orange");
	}

	$scope.addReset = function(){
		if($scope.tempInput){
			$(":text").css("width", "90%");
			$("#backRound").css("display", "inline-block");
			$scope.oldBtn = "GET A SHORT INTERNET NUMBER";
			$("#btn1").removeClass("ma-btn-orange");
		}

	}

	$scope.delReset = function(){
			$scope.tempInput = "";
			$(":text").css("width", "100%");
			$("#backRound").css("display", "none");
		
	}

