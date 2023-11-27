class uber{
    constructor(distance){
        this.distance=distance;
    }
    getprice(){
        return (this.distance)*15;
    }
}
var ride1 = new uber("10");
console.log(ride1.getprice());