// CHALLENGE 4: CAPITALIZE FIRST LETTERS OF ANY STRING
// RETURN A STRING WITH THE FIRST LETTERS OF EACH WORD CAPITALIZED

// SOLUTION 1: LOWERCASE ALL LETTERS OF STRING,
// USE SPLIT METHOD W/QUOTES AND SPACE TO SEPARATE WORDS,
// FOR EACH ON ARRAY OF WORDS, BUILD A NEW STRING WITH FIRST LETTER UPPERCASED
// USING SUBSTRING METHOD
capitlizeFirstLetter = (str) => {

	let newSent = str.toLowerCase().split(' ')
	let capString = ''

	newSent.forEach(char => {
		capString += char.substring(0,1).toUpperCase() + char.substring(1) + ' '
	})

	return capString
}

const sent = 'HEy whAts up?'

console.log(capitlizeFirstLetter(sent))


// SOLUTION 2: FOR LOOP
capitlizeFirstLetter2 = (str) => {

}