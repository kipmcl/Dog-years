var myAge = 45;
//this is my age

var earlyYears = 2;
// first two years

earlyYears *= 10.5;

var laterYears = myAge - 2;
// subtract 2 years accounted for from my age

laterYears *= 4;
// multiply later years by 4

var myAgeInDogYears = earlyYears + laterYears;
// adds early years and later years

var myName = 'KIP'.toLowerCase();
// my name converted to lowercase

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
