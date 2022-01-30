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
	//add event listener to the number buttons
	numberButtons() {
		number_inputs.forEach((number) => {
			number.addEventListener("click", (e) => {
				if (input.value === "0") {
					input.value = "";
				}
				input.value += number.textContent;
			});
		});
	},
	//end of add event listener to the number buttons
	//clear function
	clear() {
		clear.addEventListener("click", () => {
			input.value = 0;
			output.textContent = 0;
			this.temp = [];
			this.operation = "";
		});
	},
	equals() {
		equals.addEventListener("click", () => {
			let result;
			if (input.value === "0" && this.temp.length > 0) {
				this.temp[1] = this.temp[0];
			}
			this.temp.push(input.value);
			input.value = 0;
			if (this.operation === "+") {
				result = Number(this.temp[0]) + Number(this.temp[1]);
				output.textContent = result;
				return result;
			}
			if (this.operation === "-") {
				result = Number(this.temp[0]) - Number(this.temp[1]);
				output.textContent = result;
				return result;
			}
			if (this.operation === "*") {
				result = Number(this.temp[0]) * Number(this.temp[1]);
				output.textContent = result;
				return result;
			}
			if (this.operation === "/") {
				result = Number(this.temp[0]) / Number(this.temp[1]);
				output.textContent = result;
				return result;
			}
		});
	},
	//end of standard ui functions
	//math functions
	addition() {
		addition.addEventListener("click", () => {
			this.temp.push(input.value);
			this.operation = "+";
			output.textContent = input.value;
			input.value = "0";
		});
	},
	subtraction() {
		subtraction.addEventListener("click", () => {
			this.temp.push(input.value);
			this.operation = "-";
			output.textContent = input.value;
			input.value = "0";
		});
	},
	multiplication() {
		multiplication.addEventListener("click", () => {
			this.temp.push(input.value);
			this.operation = "*";
			output.textContent = input.value;
			input.value = "0";
		});
	},
	division() {
		division.addEventListener("click", () => {
			this.temp.push(input.value);
			this.operation = "/";
			output.textContent = input.value;
			input.value = "0";
		});
	},
	//end of math functions
};

const calculator = () => {
	calcObject.clear(); //enable clear function
	calcObject.numberButtons(); //enable number buttons function
	calcObject.equals(); // enable equals
	calcObject.addition(); //enable addition function
	calcObject.subtraction(); //enable addition function
	calcObject.multiplication(); //enable multiplication function
	calcObject.division(); //enable division function
};

export { calculator };
