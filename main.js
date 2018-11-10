// CHALLENGE 1: REVERSE A STRING
// RETURN A STRING IN REVERSE


// SOLUTION 1: USE FOR LOOP STARTING AT END OF
// THE END OF THE STRING AND DECREMENT TO ZERO/BEGINNING OF STRING
reverseString = (str) => {
	let newString = ''
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i]
	}
	return newString
}

let matt = 'Matt'
// console.log(reverseString('Matt'))

// SOLUTION 2:	USE SPLIT METHOD TO SEPARATE STRING BY CHARACTER
// AND PUT IN ARRAY, THEN REVERSE THE ARRAY, AND JOIN THE CHARACTERS
// WITH NO SEPARATER ''
reverseString2 = (str) => {
	return str.split('').reverse().join('')
}

let jon = 'Jon'

// console.log(reverseString2(jon))

// SOLUTION 3:	USE A FOR LOOP STARTING AT ZERO, BUILD THE EMPTY
// STRING AND ADD THE NEXT STRING CHARACTER TO THE BEGINNING OF THE STRING
reverseString3 = (str) => {
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		newStr = str[i] + newStr
	}
	return newStr
}

let karma = 'Karma'
// console.log(reverseString3(karma))

// SOLUTION 4: USE A FOR OF LOOP
reverseString4 = (str) => {
	let revStr = ''
	for (let x of str) {
		revStr = x + revStr
	}
	return revStr
}

let marley = 'Marley'
// console.log(reverseString4(marley))

// SOLUTION 5: USE A SPLIT METHOD AND A FOR EACH LOOP ON THE STRING ARRAY
reverseString5 = (str) => {
	let revStr = ''
	str.split('').forEach(char => {
		revStr = char + revStr
	})
	return revStr
}
let boomer = 'Boomer'
// console.log(reverseString5(boomer))


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

// CHALLENGE 3: REVERSE AND INTERGER
// RETURN AN INTERGER IN REVERSE AS AN INTEGER


// SOLUTION 1: USE FUNCTION FOR REVERSE STRING AND  TO STRING METHOD
reverseInt = (int) => {
	let revInt = reverseString2(int.toString())
	return parseInt(revInt)
}

// console.log(reverseInt(3672))


// SOLUTION 2: USE METHODS FOR TO STRING, SPLIT, REVERSE, AND JOIN
reverseInt2 = (int) => {
	let revInt = int.toString().split('').reverse().join('')
	return parseInt(revInt)
}
// console.log(reverseInt2(3672))


// SOLUTION 3: USE MATH.SIGN(INT) TO KEEP + OR -
// REVERSE STAYS THE SAME IF INT IS POSITIVE OR NEGATIVE
reverseInt3 = (int) => {
	let revInt = int.toString().split('').reverse().join('')
	return parseInt(revInt) * Math.sign(int)
}
// console.log(reverseInt3(-37359))

