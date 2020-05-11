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

person.dog.sayHello.call(person)// used to change the value of this from dog to person 


var chayan = {
    name: "chayan",
    sayHi: function(){
        return "Hello " + this.firstName;
    }
};
var manjistha = {
    name: "manjistha",
};
chayan.sayHi(); // hello chayan
chayan.sayHi.call(manjistha); // hello manjistha

var Chayan = {
    firstName: "Chayan",
    sayHello: function(){
        setTimeout(function(){
            console.log("Hello "+ this.firstName)
        }, 1000)
    }
}; // as setTimeout is window object's function so after 1000 ms the value of this doesn't remain Chayan that's why this.firstName gives undefined

var Chayan = {
    firstName: "Chayan",
    sayHello: function(){
        setTimeout(function(){
            console.log("Hello "+ this.firstName)
        }.bind(this), 1000)
    }
}; 