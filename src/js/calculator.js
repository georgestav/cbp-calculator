//get the buttons
const output = document.querySelector(".calc__result");
const input = document.querySelector(".calc__input");
const clear = document.getElementById("btn-clear");
const equals = document.getElementById("btn-equals");
const addition = document.getElementById("btn-add");
const subtraction = document.getElementById("btn-minus");
const multiplication = document.getElementById("btn-multiply");
const division = document.getElementById("btn-divide");

//end of button assignment

//define an object that has all the functions
const calcObject = {
	memory: [], //numbers are stored here
	operation: "", //last operation is saved here

	//standard ui functions
	//clear function
	clear() {
		clear.addEventListener("click", () => {
			output.textContent = 0;
			this.memory = [];
			this.operation = "";
		});
	},
	equals() {
		equals.addEventListener("click", () => {
			let result;
			this.memory.push(input.value);
			if (this.operation === "+") {
				result = Number(this.memory[0]) + Number(this.memory[1]);
				output.textContent = result;
				return result;
			}
			if (this.operation === "-") {
				result = Number(this.memory[0]) - Number(this.memory[1]);
				output.textContent = result;
				return result;
			}
			if (this.operation === "*") {
				result = Number(this.memory[0]) * Number(this.memory[1]);
				output.textContent = result;
				return result;
			}
			if (this.operation === "/") {
				result = Number(this.memory[0]) / Number(this.memory[1]);
				output.textContent = result;
				return result;
			}
		});
	},
	//end of standard ui functions
	//math functions
	addition() {
		addition.addEventListener("click", () => {
			this.memory.push(input.value);
			this.operation = "+";
			output.textContent = input.value;
		});
	},
	subtraction() {
		subtraction.addEventListener("click", () => {
			this.memory.push(input.value);
			this.operation = "-";
			output.textContent = input.value;
		});
	},
	multiplication() {
		multiplication.addEventListener("click", () => {
			this.memory.push(input.value);
			this.operation = "*";
			output.textContent = input.value;
		});
	},
	division() {
		division.addEventListener("click", () => {
			this.memory.push(input.value);
			this.operation = "/";
			output.textContent = input.value;
		});
	},
	//end of math functions
};

const calculator = () => {
	calcObject.clear(); //enable clear function
	calcObject.equals(); // enable equals
	calcObject.addition(); //enable addition function
	calcObject.subtraction(); //enable addition function
	calcObject.multiplication(); //enable multiplication function
	calcObject.division(); //enable division function
};

export { calculator };
