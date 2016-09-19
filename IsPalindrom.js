// by samet ERDÜNER..

function isPalindrom(number){

	var value = null;
	number = number.toString();

	for(var i = 0; i < number.length; i++){

		if(number[i]==number[(number.length-1)-i]){
			value = true;
			
		}
		else{
			value = false;
			break;
		}
	}

	return value;
}

var number = 9898989;

if(isPalindrom(number))
	console.log("it's palindrom");
else
	console.log("it isn't palindrom")
