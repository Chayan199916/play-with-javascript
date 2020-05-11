var person = {
    firstName: "Chayan",
    sayHi: function(){
        return "Hello " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    }
};

person.determineContext() // true

var person = {
    firstName: "Chayan",
    sayHi = function(){
        return "Hello " + this.firstName;
    },
    determineContext = function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello "+ this.firstName; // Hello undefined
        },
        determineContext: function(){
            return this === person; // false
        }
    }
};
