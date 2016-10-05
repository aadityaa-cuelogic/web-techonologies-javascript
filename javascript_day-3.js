/*
	1. Write a program to calculate factorial using recursive strategy.
*/

var factorial = function(value) {
	if(value == 1){
		return 1;
	}else{
		return (value * factorial(value-1));
	}
};

console.log(factorial(5));

/*
	2. Update program - 2 of Practicals Day 2 to add a method that will print name (called printName()) of each student object in its prototype.
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

Student.prototype.printName = function () {
		console.log('Student Name => ',this.name);
}

console.log(student1.printName(), '===NewMethod===');

/*
3. Write a program that will do the following:
    1. Accept two string values as arguments, where first value will be a long word(can be any random characters as well), second string will be a single character or substring that will already exist in the first value.
    2. The function should then return an object with properties - 'count' which will count the no of occurrences of substring in the first value, ' lastIndex' which will return the index of last occurrence of the substring in the first value.  return -1 if the substring can't be found
*/

function subStringFun_1(str1, str2){
	if(typeof str1 === 'string' && typeof str2 === 'string'){
		// var result = str1.match(/''/g);
		if(str1.indexOf(str2) !== -1){
			console.log('String 1 contains String 2');
		}
	}
}

function subStringFun_2(str1, str2) {
	var obj = {'count':0, 'lastIndex':0};
	if(typeof str1 === 'string' && typeof str2 === 'string' && str2.length > 0){
		var count = 0;
		var index = str1.indexOf(str2);
		if(index !== -1){
			var lastIndex = str1.lastIndexOf(str2);
			while(index !== -1 && index <= lastIndex){ //will stop unnessary loop in whole string and save excution bulkhead
				count++;
				index = str1.indexOf(str2, index+1);
			}
			
			obj.count = count;
			obj.lastIndex = lastIndex;
			console.log('Object => Count :',obj.count, ' lastIndex :',obj.lastIndex);
		}else{
			return -1;
		}
	}else{
		return -1;
	}
}

/*
	4. Write a function that will accept a unix timeStamp and covert to its UTC equivalent value
*/
function unixTimestampToUTC(unixTimestamp) {
	return new Date(unixTimestamp*1000).toUTCString();
}


/*
5.  Write a function that will accept a single dimensional array whose value will be like ['00','01','11','10','11','00'] and break it into a 2 dimensional array like the following:
    [
        [0,0,1,1,1,0]
        [0,1,1,0,1,0]
    ]
    the  length of array can be dynamic and contain as many values as possible
*/


/*
	6. Write a program to do the following:
	    1. Create an array and add numbers 1 to 100 in it
	    2. Print each element of that array in a new line WITHOUT using any loop structure.
*/

var myArray = new Array();
for(var i=1; i <= 100; i++){
	myArray.push(i);
}
console.log(myArray);

