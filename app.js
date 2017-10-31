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
			$("#btn1").css("background-color", "#e4a465");
			$(":text").css("width", "100%");
			$("#backRound").css("display", "none");
		}
		else {
			alert('Строка ввода пуста!');
		}
	}

	$scope.deleteItem = function(item){
		var index = $scope.taskArray.indexOf(item);
		console.log(item);
		$scope.taskArray.splice(index, 1);
		$scope.oldBtn = "GET A SHORT INTERNET NUMBER";
		$("#btn1").css("background-color", "#5284b6");
	}

	$scope.addReset = function(){
		if($scope.tempInput){
			$(":text").css("width", "90%");
			$("#backRound").css("display", "inline-block");
			$scope.oldBtn = "GET A SHORT INTERNET NUMBER";
			$("#btn1").css("background-color", "#5284b6");
		}

	}

	$scope.delReset = function(){
			$scope.tempInput = "";
			$(":text").css("width", "100%");
			$("#backRound").css("display", "none");
		
	}



});

function addColor3(){
  $("tr:even").css("background-color", "grey");
  $("tr:odd").css("background-color", "blue");
  $("tr:gt(2)").css("color", "yellow");
}

function backColor (){
	  $("tr:even").css("background-color", "inherit");
  $("tr:odd").css("background-color", "inherit");
  $("tr:gt(2)").css("color", "inherit");
}
