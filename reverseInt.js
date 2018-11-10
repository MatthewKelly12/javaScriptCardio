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