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
   
}