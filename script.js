// task 1
let count = () => {

	let operator = id_2.value;
	let number1 = id_1.value;
	let number2 = id_3.value;
		let result;
	if(operator === '+'){
		result = (Number(number1) + Number(number2))
	}else if(operator === '-'){
	   result = (Number(number1) - Number(number2))
	}else if(operator === '*'){
	result = (Number(number1) * Number(number2))
	}else if(operator === '/'){
	result = (Number(number1) / Number(number2))
	}else{
		alert('Please try again');
	}
	
	alert(result)
}

