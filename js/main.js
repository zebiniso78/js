alert("Welcome to our daily online market. \nYou need to enter some personal informations first! ")

var firstName = prompt("Enter your first name : ", "John");
var lastName = prompt ("Enter your last name : ", "Doe");
var age = prompt ("Enter your age : ", "18");
var emailAddress = prompt ("Enter your email address : ", "example@gmail.com");
var phoneNumber = prompt ("Enter your Phone number : ", "+998901234567");
var currentAddress = prompt ("Enter your current address : ", "Tashkent");
var cardNumber = prompt ("Enter your card number : ", "00000000000");
var productsPrefered = prompt ("What kind of products you want to buy mostly : ", "Dairy");
var deliveryTime = prompt ("What time do you want to get products : ", "8-9 o'clock in the morning");
var deliveryPeriod = prompt ("How often do you want to get your products : ", "Every day");

console.log("First name: " + firstName + 
"\nLast Name: " + lastName + 
"\nAge: " + age +
"\nEmail address: " + emailAddress +
"\nPhone number: " + phoneNumber +
"\nCurrent address: " + currentAddress + 
"\nCard number: " + cardNumber + 
"\nType of product you want to buy: " + productsPrefered +
"\nTime you want to get your product: " + deliveryTime +
"\nPeriod you want to get your products: " + deliveryPeriod +
alert("Thank you for choosing our service!!! Have a nice day!!!"));