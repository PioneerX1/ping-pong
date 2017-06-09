//convert string to a number FIRST
var inputNumber = 20;
var regularCount = [];
var modifiedCount = [];

for (var i=1; i <= inputNumber; i++) {
	regularCount[i-1] = i;
}

for (var i=1; i <= inputNumber; i++) {
	var temp = regularCount[i-1];
  var result;

  if (temp % 15 === 0) {
  	result = "ping-pong";
  } else if (temp % 5 === 0) {
  	result = "pong";
  } else if (temp % 3 === 0) {
  	result = "ping";
  } else {
  	result = temp;
  }
  modifiedCount[i-1] = result;
}

alert(regularCount.toString());
alert(modifiedCount.toString());
