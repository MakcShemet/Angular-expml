function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function() {
    return "Привет, " + this.greeting;
}

// Oops, we're passing an object when we want a string. This will print 
// "Hello, [object Object]" instead of "Hello, world" without error.
let greeter = new Greeter("Мир!");  

let button = document.createElement('button');
button.textContent = "Скажи Привет";
button.onclick = function() {
    confirm(greeter.greet());
    if(false){
    	alert("Привет!");
    }
    else {
    	alert("Ну и ладно...");
    }
};

document.body.appendChild(button);

