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

let str = 'Matt'
console.log(reverseString('Matt'))

// SOLUTION 2:	USE SPLIT METHOD TO SEPARATE STRING BY CHARACTER
// AND PUT IN ARRAY, THEN REVERSE THE ARRAY, AND JOIN THE CHARACTERS
// WITH NO SEPARATER ''
reverseString2 = (str) => {
	return str.split('').reverse().join('')
}

let jon = 'Jon'

console.log(reverseString2(jon))

reverseString3 = (str) => {
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		newStr = str[i] + newStr
	}
	return newStr
}

let karma = 'Karma'
console.log(reverseString3(karma))

reverseString4 = (str) => {
	let revStr = ''
	for (let x of str) {
		revStr = x + revStr
	}
	return revStr
}

let marley = 'Marley'
console.log(reverseString4(marley))

reverseString5 = (str) => {
	let revStr = ''
	str.split('').forEach(char => {
		revStr = char + revStr
	})
	return revStr
}
let boomer = 'Boomer'
console.log(reverseString5(boomer))