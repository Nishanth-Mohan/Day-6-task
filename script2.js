//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(title, studio, rating){
        this.title= title;
        this.studio= studio;
        this.rating= rating;

    }
}
var entertainment = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(entertainment);
/*
----------------------------------------------------------------------------
*/
//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
/*class Movie{
    constructor(title, studio, rating){
        this.title= title;
        this.studio= studio;
        this.rating= rating;
        if(this.rating===undefined){
            this.rating="PG";
        }

    }
}
var entertainment = new Movie("Casino Royale", "Eon Productions");
console.log(entertainment);
----------------------------------------------------------------------------
*/
//c) c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
/*
class Movie{
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="PG"}
    
}
getPG (){
return (`${this.title},${this.studio},${this.rating}`)
}
getobject (){
return ({title:this.title,
    studio:this.studio,
    rating:this.rating})
}
}
var movie1 = new Movie("Casino Royale", "Eon Productions");
console.log(movie1.getPG());
var movie2 = new Movie("Leo","seven screen","PG");
var movie3 = new Movie("Jailer","sunTV","PG");
var movie4 = new Movie("Master","seven screen","PG");
let arr=[];
arr.push(movie2.getobject());
arr.push(movie3.getobject());
arr.push(movie4.getobject());
console.log(arr);
---------------------------------------------------------------------
*/
