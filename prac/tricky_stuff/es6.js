class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    getInfo(){
        return this.name + " earns " + this.salary;
    }
    static slogan(){
        return "we are happy!";
    }
}

class Programmer extends Employee{
    constructor(name, salary, lang){
        super(name, salary);
        this.lang = lang;
    }
    showInfo(){
        return this.name + " uses " + this.lang;
    }
}