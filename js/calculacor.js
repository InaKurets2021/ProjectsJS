const insert = (sum) => {
	document.calculator.textview.value = document.calculator.textview.value + sum;
}

const clean = () => {
	document.calculator.textview.value = "";
}
const equally = () => {
	let result = document.calculator.textview.value;
	if (result) {
		document.calculator.textview.value = eval(result);
	}
}


document.addEventListener('keydown', function () { });