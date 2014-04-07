/*
var name = "Amy";
var space = " ";
var activity = "practiced";
var numberOfHours;
var sum = "total";
var timeUnit = "hours";
var sentance;

numberOfHours = 7800;
numberOfHours = prompt("Enter number of hours practices", 0);
sentance = name + space + activity + space + numberOfHours + space + sum + space + timeUnit + ".";
alert(sentance);
sentance;
*/
var hoursPracticed = parseInt(prompt("How many hours have you practiced?", 0)) || -1,
    topLevel = 4000,
    output; 

output = hoursPracticed < 0 ? "Hours practiced must be an integer greater than 0." :
		 hoursPracticed < 4000 ? "You need to practice " + (4000 - hoursPracticed) + " more." :
		 "Good job!";

alert(output);
output;