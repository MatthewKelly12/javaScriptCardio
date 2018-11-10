// CHALLENGE 2: VALIDATE A PALINDROME
// RETURN TRUE IF STRING IS A PALIDNDROME AND FALSE IF NOT


// SOLUTION 1: USE FUNCTION FOR REVERSE STRING AND COMPARE W/IF STATEMENT
isPalidndrome = (str) => {
	if (reverseString2(str) === str) {
		return true
	}
	else {
		return false
	}
}

// console.log(isPalidndrome('bob'))
// console.log(isPalidndrome('bobby'))


// SOLUTION 2: USE SPLIT TO MAKE AN ARRAY OF STRING,
//             THEN REVERSE THE ARRAY, AND JOIN AT QUOTES
isPalidndrome2 = (str) => {
	let revStr = str.split('').reverse().join('')
	if (revStr === str) {
		return true
	}
	else {
		return false
	}
}

// console.log(isPalidndrome2('mom'))
// console.log(isPalidndrome2('mommy'))