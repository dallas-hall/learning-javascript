// Get all the elements via the class attribute
var eClassList = document.getElementsByClassName('hot');
console.log(eClassList);

// Process only if 3 or more are found
/*if (eClassList.length > 2) {
	// Process the third one
	var anElement = eClassList[2];
	// Change its colour
	anElement.className = 'cool';
}*/


// Process them all - DOESN'T WORK??? Skips number 2.
for (i = 0; i < eClassList.length; i++) {
	console.log(i);
	console.log(eClassList.item(i).innerHTML);
	console.log(eClassList.item(i).nodeName);
	//eClassList.item(i).className = 'cool';
}

// Process them all - DOESN'T WORK??? Skips number 2.
/*for (i = 0; i < eClassList.length; i++) {
	console.log(i);
	console.log(eClassList[i].innerHTML);
	console.log(eClassList[i].nodeName);
	//eClassList[i].className = 'cool';
}*/
