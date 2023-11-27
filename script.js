class Person{
constructor(name, age, qualification, height, weight){
this.name=name;
this.age=age;
this.qualification=qualification;
this.height=height;
this.weight=weight;
}
}
var p1 = new Person("nishanth", "29", "BE.,", "5.9", "85");
var p2 = new Person("Thiru","18", "BE.,", "5.7", "68");
var p3 = p1;
console.log(p1);
console.log(p3.name);