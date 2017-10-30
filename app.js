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
			document.getElementById('btn1').style.backgroundColor="orange";
			return;
		}
		else{
			console.log("Поле имени пустое");
		}
		
	}

$scope.addReset = function(){
	if($scope.nameUse){
			$(":text").css("width", "90%");
		}
	}

	$scope.deleteItem = function(item){
		var index = $scope.nameArray.indexOf(item);
		console.log(item);
		$scope.nameArray.splice(index, 1);
		$scope.newButton = "ДОБАВИТЬ";
		document.getElementById('btn1').style.backgroundColor="#337ab7";
		$(":text").css("width", "100%");
	}



})


function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function() {
    return "Привет, " + this.greeting;
}

// Oops, we're passing an object when we want a string. This will print 
// "Hello, [object Object]" instead of "Hello, world" without error.
var greeter = new Greeter("Мир!");  


var button = document.createElement('button');
button.textContent = "Скажи Привет";
button.onclick = function() {
   if (confirm(greeter.greet()))
    {
        	alert("Привет!");
    	}
    	else{
    		alert("Ну и ладно...");
    	}
   
};

document.body.appendChild(button);

function addColor3(){
  $("tr:even").css("background-color", "grey");
  $("tr:odd").css("background-color", "blue");
  $("tr:gt(2)").css("color", "yellow");
}
