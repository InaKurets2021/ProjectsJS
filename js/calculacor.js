const fakeInput = document.querySelector("#fakeInput");
const mainInput = document.querySelector("#mainInput");


const insert = (sum) => {
	mainInput.value = mainInput.value + sum;
	if (mainInput.value === "+" || mainInput.value === "*" || mainInput.value === "/" || mainInput.value === "--" || mainInput.value === "00") {
		mainInput.value = "";
	}
	else if (sum === "+" || sum === "*" || sum === "/") {
		fakeInput.value = mainInput.value;
		mainInput.value = "";
	}

	else if (sum === ".") {
		mainInput.value = "0.";
	}
	
	for (let i = 1; i < mainInput.value.length; i++) {
		if (mainInput.value[i] === "-") {
			fakeInput.value += mainInput.value;
			mainInput.value = "";
		}
	}
};

const clean = () => {
	mainInput.value = "";
};


const equally = () => {
	let result = fakeInput.value + mainInput.value;
	if (result) {
		result = result.replace("--", "+");
		mainInput.value = eval(result).toFixed(5);
	}
	fakeInput.value = "";
};

const deleteLastSymbol = () => {
	mainInput.value = mainInput.value.substr(0, mainInput.value.length - 1);
};


document.addEventListener("keydown", (event) => {
	const values = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"0",
		"*",
		"/",
		"+",
		"-",
		".",
	];
	if (values.includes(event.key)) {
		sum(event.key) 
	}
	else if (event.key === "Backspace") {
		deleteLastSymbol();
	}
	else if (event.key === "Enter") {
		event.preventDefault()
		equally()
	}
});