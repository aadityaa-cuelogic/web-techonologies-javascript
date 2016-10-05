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
	console.log(args);
	for(var i=1; i < args.length; i++){
		if(typeof args[i] !== 'number'){
			alert('Invalid argument ' + args[i] + ' at position '+ (i));
			return false;
		}
	}
	return true;
}