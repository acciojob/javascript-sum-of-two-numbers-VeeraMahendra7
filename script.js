let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
function getOutput() {
	let first = Number(input1);
	let second = Number(input2);

	if(isNaN(first) || isNaN(second)){
		alert('Invalid input. Please enter a valid number.');
	}els{
		alert(`The sum of ${first} and ${second} is ${first+second}.`);
	}

}


getOutput();