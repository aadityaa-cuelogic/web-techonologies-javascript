/*
1. Write a program to create functions that will do the following 
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Divide 2 numbers
    4. Multiply 2 numbers
    Then update the program to get dynamic no of arguments(there can be 2,3,4 etc no of variables passed in when invoking the functions) The function should accept at least 2            variables and throw error if less then 2 are passed. The function should also validate the type of argument passed in
*/

function arithmeticFunctionWithStaticArgument(operationType, val1 , val2){
	switch(operationType){

		case 'Add':
			return val1+val2;

		case 'Subtract':
			return val1-val2;

		case 'Multiply':
			return val1*val2;

		case 'Divide':
			return val1/val2;

		default:
			alert('Please enter correct operationType');
	}
}

function arithmeticFunctionWithDynamicArgument(operationType) {
	var args = Array.prototype.slice.call(arguments);
	if(args.length < 3){
		alert('Please enter at least two numbers');
		return false;
	}

	var validateResult = validateAruguments(args);

	if(validateResult === false){
		return false;
	}

	switch(operationType){
		case 'Add':
			var sum_result = args[1];
			for(var i=2; i < args.length; i++){
				sum_result += args[i];
			}
			return sum_result;

		case 'Subtract':
			var sub_result = args[1];
			for(var i=2; i < args.length; i++){
				sub_result -= args[i];
			}
			return sub_result;

		case 'Multiply':
			var mul_result = args[1];
			for(var i=2; i < args.length; i++){
				mul_result *= args[i];
			}
			return mul_result;

		case 'Divide':
			var div_result = args[1];
			for(var i=2; i < args.length; i++){
				div_result /= args[i];
			}
			return div_result;

		default :
			alert('Invalid operationType');
	}
	
}

function validateAruguments(args) {
	for(var i=1; i < args.length; i++){
		if(typeof args[i] !== 'number'){
			alert('Invalid argument ' + args[i] + ' at position '+ (i));
			return false;
		}
	}
	return true;
}

/*
2. Write a program that will do the following:
    1. Create a student class and then create multiple student objects out of it.
    2. Using a student object, add a method in the student class that will be then accessible from new objects created.
*/

class Student{
	constructor(name, rank){
		this.name = name;
		this.rank = rank;
	}
	get student(){
		return this.studentDetails();
	}
	studentDetails(){
		return this.name + "\'s" + ' rank is ' + this.rank ;
	}
}
var student1 = new Student('Aaditya', 1);
var student2 = new Student('Tushar', 2);
var student3 = new Student('Sneha', 3);
console.log(student1.student, '===Student 1===');
console.log(student2.student, '===Student 2===');
console.log(student3.student, '===Student 3===');

Student.prototype.NewMethod = function () {
		console.log('NewMethod added');
}

console.log(student1.NewMethod(), '===NewMethod===');

/*
	3. Write a program that can make the use of 'reserved' keywords in JS without getting any error.
*/

var a = new Array();
a["extends"]="extends"; 
a['for']='for';
console.log(a.extends, '===extends===', a.for,'===for===');


/*
	4. Write a program that will print number from 1 to 100 using all the variants of a loop structure(for,while,do while etc)
*/

//for loop
function print1To100(){
	console.log("============================FOR LOOP=========================");
	for(var i=1; i<=100; i++){
		console.log(i+'\n');
	}

	console.log("============================WHILE LOOP=========================");
	var i=1;
	while(i<=100){
		console.log(i+'\n');
		i++;
	}

	console.log("============================DO - WHILE LOOP=========================");
	var i=1;
	do{
		console.log(i+'\n');
		i++;
	}while(i<=100);
}