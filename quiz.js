// I looked at previous labs from this week. I also did searches online.
// Do NOT modify the HTML document manually!!!!

// Question 1
// Use jQuery to add two more elements to the the UL in the 'question-1' div
$('#question-1 ul').append('<li>New List Item</li>');



// Question 2
// Add a click event handler to the paragraph in the 'question-2' div
// which triggers a method called 'alertClicked',
// which will display an alert with the text of "Question 2 Success".
$('#question-2 p').on('click', alertClicked());

var alertClicked = function() {
  alert("Question 2 Success");
};

// Question 3
// Why won't the following code make clicking on anything the 'question-3' div
// invoke the alertClicked method?

$('#question-3').on('click', alertClicked);
//because there are no parentheses after alertClicked like so 'alertClicked()'. The parentheses tell to invoke the function.


// Question 4
// Make the HTML in the 'question-4' div fade out when you hover over it,
// and fade back in when you move your mouse away from it

$('#question-4').hover(
  function () {
    $('#question-4').fadeTo('normal', 0);
  },
  function () {
    $('#question-4').stop(true).fadeTo('normal', 1);
  }
  );

// Question 5
// Make question 5's h2 turn blue when someone types 'winning'
// in its input element and hits enter


$('#q-5-input').change(function() {
  $('h2').value.css({'color': 'blue'});
});




// Question 6
// Add a method to the String prototype called 'reverse'
// which will return the string reversed.
// You should be able to run 'foo'.reverse() and get 'oof'
// Use this method to reverse the text in the h2 in the 'question-6' div

String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}

"foo".reverse();
$('#question-6 h2').reverse();


// Question 7
// Write a method called 'highLightHeaders' that will add a class of 'highlight'
// to all h2's when it is invoked

$('h2').addClass('highlight');

// Question 8
// Define a constructor function called `Cat`,that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var Cat = function(name, age, color) {};


// Question 9
// Add a function called `description` to the `Cat` prototype that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

var description = Cat.new (function(name, age, color)) {
return (Cat.name + " is a " + Cat.age + "-year-old " + Cat.color + " cat.");
}

// Question 10
// Use the methods of .map and .reduce to return the
// sum the prices of the objects in the array below.
// Do *not* use a for loop

var items = [
  {name: 'iPhone 5c', price: 99.99},
  {name: 'iPhone 5s', price: 149.99},
  {name: 'iPhone 6', price: 249.99},
  {name: 'iPhone 6 plus', price: 399.99}
];

var sum = items.map(items.price)
return
//not sure how this works yet

