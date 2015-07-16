//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      The "this" keyword allows us to reuse functions with different objects.
      In JavaScript, the thing called "this", is the object that "owns" the JavaScript code.
      The value of "this", when used in a function, is the object that "owns" the function.
      The "this" keyword in an object constructor does not have a value. It is only a substitute for the new object.
      The value of "this" will become the new object when the constructor is used to create an object.


  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

      1.) Implicit binding, whatever happens to be to the left of the dot (i.e. - aj.isOver25( ); 
      2.) Explicit binding - bind, call, apply; returns new function
      3.) New binding - uses new keyword
      4.) Window binding - if none of the rules apply, it will default to the window (don’t do this ever because anyone can change this on the window)

  // 3) What is the difference between call and apply?

      //Answer
      Call is explicit, executes with parameters (you pass arguments 1, 2, 3, 4)
      Apply is explicit, executes decomposes / expands array (changes arguments to 1,2,3,4 in an array)

  // 4) What does .bind do?

      //Answer
      Bind is explicit, returns new function


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

    var user = {username:"wewilliams", email:"wendywill25@hotmail.com", getUserName:"name.this"};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

getUsername(user[username]);


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  };
} 


var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
getYear.call(prius);
getYear.call(mustang);



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  //undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  nothing - it is not bound to any object

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
ar user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

var getSpecificName = getUsername.bind(user);

setTimeout(getSpecificName, 5000);