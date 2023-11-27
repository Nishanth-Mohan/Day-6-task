var pi = 3.14285;
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
getcircumference (){
    return 2*pi*this.radius;
}
getarea (){
    return pi*this.radius*this.radius;
}
}
var a = new Circle("9","green");
console.log(a);
console.log(a.getcircumference().toFixed(2));
console.log(a.getarea().toFixed(2));
