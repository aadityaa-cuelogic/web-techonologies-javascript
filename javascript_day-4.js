/*
	1. Write a program to copy two objects. It should accept two arguments - source ( the object from which we need to copy) and target ( to which we need to copy). The target object will initially be empty.
*/

function copyOjects(sourceObj, destObj) {
	destObj = JSON.parse(JSON.stringify(sourceObj));
	console.log(destObj,'===Target Obj===');
}

/*
	2. Write a program to merge two objects. It should accept two arguments - objectA and objectB. The result object will have the combined values and should not change the structure of either objectA or objectB. If both objects have same properties, consider using objectA property instead.
*/
function merge_objects(objectA,objectB){
    var newObj = {};
    for (var i in objectB){
    	newObj[i] = objectB[i];
    }
    for (var i in objectA){
    	newObj[i] = objectA[i];
    }
    return newObj;
}
var objectA = { a:1, b:2};
var objectB = { a:'abc', c:3};
console.log(merge_objects(objectA, objectB));

/*
	3. Extend number type to have a 'float()' function that will convert any given 'integer' value to its float equivalent. (a no such as 5 should become 5.00) The function should only return that value and should not affect the actual number's value.
*/

if(Number.prototype.float == null){ //check is exists or not
	Number.prototype.float = function(value){
  	if(Number.isInteger(value)){ //check if interger or not
      return value.toFixed(2);
  	}
  }
}
/*
	4. Extend number type to have a 'int()' function that will convert any given 'float' value to its integer equivalent. (a no such as 5.00 should become 5). The function should only return that value and should not affect the actual number's value.
*/
if(Number.prototype.int == null){ //check is exists or not
	Number.prototype.int = function(value){
  		return parseInt(value);
  	}
}
/*
	5. Write a program to loop through the children of a ul element(ul will have 5 li's). Loop through each of the li and attach a function on it that will alert the value of that li (html text inside the li). 
*/

var element = document.getElementById('ulid');
//solution type 1
for(i in element.childNodes){
	console.log(element.childNodes[i]);
}
//solution type 2
for(var i=0; i<element.childNodes.length; i++){
	console.log(element.childNodes[i]);
}
//solution type 3
var items = element.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
	items[i].addEventListener("click", modifyAlert, false);
}

function modifyAlert(){
	alert(this.innerHTML);
}