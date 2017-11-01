angular.module("myApp", [])
.controller("firstCtrl", function($scope){
	//Переменная для формы
	$scope.tempInput = "";
	
	//Переменная для кнопки
	$scope.oldBtn = "ДОБАВИТЬ";

	
	//Хранилище данных из формы
	$scope.taskArray = [];
	
	//Функция добавления в хранилище данных из формы и смены кнопки
	$scope.newBtn = function() {
		if($scope.tempInput){
			$scope.taskArray.push($scope.tempInput);
			$scope.tempInput = "";
			$scope.oldBtn = "ДОБАВЛЕНО";
			$("#btn1").addClass('ma-btn-orange');
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
		$scope.oldBtn = "ДОБАВИТЬ";
		$("#btn1").removeClass("ma-btn-orange");
	}

	$scope.addReset = function(){
		if($scope.tempInput){
			$(":text").css("width", "95%");
			$("#backRound").css("display", "inline-block");
			$scope.oldBtn = "ДОБАВИТЬ";
			$("#btn1").removeClass("ma-btn-orange");
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
  $("tr:odd").css("color", "yellow");
}

function backColor (){
	  $("tr:even").css("background-color", "#fff");
  $("tr:odd").css("background-color", "#fff");
  $("tr:odd").css("color", "inherit");
}

