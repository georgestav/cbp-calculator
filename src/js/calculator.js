//get the buttons
const output = document.querySelector(".calc__result");
const input = document.querySelector(".calc__input");
const clear = document.getElementById("btn-clear");
const equals = document.getElementById("btn-equals");
const addition = document.getElementById("btn-add");
const subtraction = document.getElementById("btn-minus");
const multiplication = document.getElementById("btn-multiply");
const division = document.getElementById("btn-divide");
const number_inputs = Array.from(document.getElementsByClassName("btn--num"));
//end of button assignment

//define an object that has all the functions
const calcObject = {
	temp: [], //numbers are stored here
	operation: "", //last operation is saved here
	//standard ui functions
	//add event listeners to the number buttons
	numberButtons(number) {
		if (input.value === "0") {
			input.value = "";
		}
		input.value += number;
	},
	//end of add event listeners to the number buttons
	//clear function
	clear() {
		input.value = 0;
		output.textContent = 0;
		this.temp = [];
		this.operation = "";
	},
	equals() {
		// if (input.value === "0" && this.temp.length > 0) {
		// 	this.temp[1] = this.temp[0];
		// }
		this.temp.push(input.value);
		let result = (num1, num2) => {
			if (this.operation === "+") {
				return num1 + num2;
			}
			if (this.operation === "-") {
				return num1 - num2;
			}
			if (this.operation === "*") {
				return num1 * num2;
			}
			if (this.operation === "/") {
				return num1 / num2;
			}
		};
		output.textContent = result(Number(this.temp[0]), Number(this.temp[1]));
		this.temp = [];
		this.operation = "";
		input.value = 0;
	},
	//end of standard ui functions
	//math functions
	addition() {
		this.temp.push(input.value);
		this.operation = "+";
		output.textContent = input.value;
		input.value = "0";
	},
	subtraction() {
		this.temp.push(input.value);
		this.operation = "-";
		output.textContent = input.value;
		input.value = "0";
	},
	multiplication() {
		this.temp.push(input.value);
		this.operation = "*";
		output.textContent = input.value;
		input.value = "0";
	},
	division() {
		this.temp.push(input.value);
		this.operation = "/";
		output.textContent = input.value;
		input.value = "0";
	},
	//end of math functions
};

const calculator = () => {
	//number buttons
	number_inputs.forEach((number) => {
		number.addEventListener("click", (e) => {
			calcObject.numberButtons(number.textContent); //call number buttons function
		});
	});
	//keyboard input numbers
	document.addEventListener("keydown", (e) => {
		//regex test case
		if (/\d/g.test(e.key) || e.key === ".") {
			calcObject.numberButtons(e.key); //call number buttons function
		}
	});

	//clear button
	clear.addEventListener("click", () => {
		calcObject.clear(); //call clear function
	});
	//clear input with keyboard, comes from hitting delete or backspace
	document.addEventListener("keydown", (e) => {
		if (e.key === "Backspace" || e.key === "Delete") {
			calcObject.clear(); //call clear function
		}
	});

	//equals button
	equals.addEventListener("click", () => {
		calcObject.equals(); // call equals
	});
	//equals input with keyboard, comes from enter
	document.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			calcObject.equals(); // call equals
		}
	});

	//addition button
	addition.addEventListener("click", () => {
		calcObject.addition(); //call addition function
	});
	// addition button input with keyboard
	document.addEventListener("keydown", (e) => {
		if (e.key === "+") {
			calcObject.addition(); //call addition function
		}
	});

	//subtraction button
	subtraction.addEventListener("click", () => {
		calcObject.subtraction(); //call subtraction function
	});
	// subtraction button input with keyboard
	document.addEventListener("keydown", (e) => {
		if (e.key === "-") {
			calcObject.subtraction(); //call subtraction function
		}
	});

	//multiplication button
	multiplication.addEventListener("click", () => {
		calcObject.multiplication(); //call multiplication function
	});
	// multiplication button input with keyboard
	document.addEventListener("keydown", (e) => {
		if (e.key === "*") {
			calcObject.multiplication(); //call multiplication function
		}
	});

	//division button
	division.addEventListener("click", () => {
		calcObject.division(); //call division function
	});
	// division button input with keyboard
	document.addEventListener("keydown", (e) => {
		if (e.key === "/") {
			calcObject.division(); //call division function
		}
	});
};

export { calculator };
