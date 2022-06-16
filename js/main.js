// -----------------------------------------1-masala----------------------------------------------------------
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

function addition(a,b){
    return a + b;
}

// ------------------------------------------2-masala--------------------------------------------------------
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

function convert(minutes) {
	return minutes * 60;
}

// -------------------------------------------3-masala---------------------------------------------------------
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

function addition2(num) {
	return num + 1;
}

// -------------------------------------------4-masala---------------------------------------------------------
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50

function triArea(base, height) {
	return (base * height) / 2;
}

// -------------------------------------------5-masala---------------------------------------------------------
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

function calcAge(age) {
	return age * 365;
}

// -------------------------------------------6-masala---------------------------------------------------------

// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

function remainder(x, y) {
	return x % y;
}

// -------------------------------------------7-masala---------------------------------------------------------
// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
	return (wins * 3) + (draws * 1) + (losses * 0);
}

// -------------------------------------------8-masala---------------------------------------------------------

// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

function points(twoPointers, threePointers) {
	return (twoPointers * 2) + (threePointers * 3);
}

// -------------------------------------------9-masala---------------------------------------------------------

// lessThan100(22, 15) ➞ true
// 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// 83 + 34 = 117

// lessThan100(3, 77) ➞ true
// Given two numbers, return true if the sum of both numbers
//  is less than 100. Otherwise return false.

function lessThan100(a, b) {
	return (a + b) < 100;
}

// -------------------------------------------10-masala---------------------------------------------------------

// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
}











































