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

/*
	2. Write a program that uses at least three ways to create an object variable,array variable
*/
	//Object Variables
		//Using object literal
		var myNewObject1 = { name : 'Aaditya Agrawal', designation : 'Sr Software Developer', goal : 'Learn to enhance/update technical skills and earn while learning'};

		//Usign keyword "new"
		var myNewObject2 = new object();
		myNewObject2.name = 'Aaditya Agrawal';
		myNewObject2.designation = 'Sr Software Developer';
		myNewObject2.goal = 'Learn to enhance/update technical skills and earn while learning';

		//Using Object Constructor
		function myNewObject3(name, designation, goal) {
			this.name = name;
			this.designation = designation;
			this.goal = goal;
		}
		var myNewObject3 = new myNewObject3('Aaditya Agrawal', 'Sr Software Developer', 'Learn to enahance/update technical skills and earn while learning');

		//using prototype way
		myNewObject3.prototype.empcode = 'Cue307';
		var myNewObject3 =  Object.create(myNewObject3.prototype);//instantiate object using the constructor function

	//Array Varaibles
		//Using keyward new
		var myArrayVar = new Array('hi', 123, 'bye');

		//declare n then define
		var myArrayVar = new Array();
		myArrayVar[0] = 'here';
		myArrayVar[1] ='added value';

		//using array literal
		var myArrayVar = ['hello', 2, 'javascript'];


