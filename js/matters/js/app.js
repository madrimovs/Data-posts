/*=========================== ENG KO'P HARF SONI ========================== */
// ["s", "a", "l", "o", "m", "m", "m"];
let words = "salommm";
let letters = {};
let splitWord = words.split("");

function findNumLetter() {
	for (let word of splitWord) {
		if (!letters[word]) {
			letters[word] = 1;
		} else {
			letters[word]++;
		}
	}
}
findNumLetter();
console.log(letters);

/*================================= Palindrome ==============================*/
let num = "212";
const checkPalindrome = () => {
	let reversNum = num.toString().split("").reverse().join("");
	let strValue = num.toString();

	if (strValue === reversNum) {
		console.log("Palindrome");
	} else {
		console.log("Not a Palindrome");
	}
};
checkPalindrome();

/*================================ Kabisa yili ============================= */
function findYear(year) {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(findYear(2000));

/*================================== Manfiy son ============================== */
const numbers = [32, -12, 32, 33, 54];
function findNumber() {
	let newNum = [];
	numbers.forEach((number) => {
		if (number < 0) {
			newNum.push(number);
		}
	});
	console.log(newNum);
}
findNumber();
