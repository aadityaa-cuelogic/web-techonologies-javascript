/*
1. Write a program to create variables of the following types:
        int
        string
        boolean
        object
        array
    then add values in array(can be value of any type). Delete values from the array using array built in methods. 
    Toggle values of boolean variables
    Concatenate string with more values(without creating new string variables)
*/

//create variables
var myIntVar = 123;
var myStringVar = 'Aaditya Agrawal';
var myBoolVar = true;
var myObjVar = { name : 'Aaditya Agrawal', designation : 'Sr Software Developer', goal : 'Learn to enhance/update technical skills and earn while learning'};
var myArrayVar = new Array('javascript', 'skills', 123);
//var myArrayVar = ['javascript', 'skills', 123];

//add values in array
myArrayVar.push('push_value');

//remove value in array
myArrayVar.pop('push_value');

//toggle value of Bool vars
if(myBoolVar){
	myBoolVar = false;
}else{
	myBoolVar = true;
}

//cocatenate string with more value
myStringVar += '_Open Source Developer';

