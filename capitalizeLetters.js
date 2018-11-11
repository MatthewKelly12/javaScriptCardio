// CHALLENGE 4: CAPITALIZE FIRST LETTERS OF ANY STRING
// RETURN A STRING WITH THE FIRST LETTERS OF EACH WORD CAPITALIZED

// SOLUTION 1: LOWERCASE ALL LETTERS OF STRING,
// USE SPLIT METHOD W/QUOTES AND SPACE TO SEPARATE WORDS,
// FOR EACH ON ARRAY OF WORDS, BUILD A NEW STRING WITH FIRST LETTER UPPERCASED
// USING SUBSTRING METHOD
capitlizeFirstLetter = (str) => {

	let newSent = str.toLowerCase().split(' ')
	let capString = ''

	newSent.forEach(word => {
		capString += word.substring(0,1).toUpperCase() + word.substring(1) + ' '
	})

	return capString
}

const sent = 'HEy whAts up?'

// console.log(capitlizeFirstLetter(sent))


// SOLUTION 2: SPLIT METHOD AND FOR LOOP OVER ARRAY, USE SUBSTRING ON FIRST
// LETTER OF WORD, CAPITALIZE IT, AND ADD A SUBSTRING OF THE REST OF THE WORD
// RETURN ARRAY WITH JOIN METHOD AND A SPACE
capitlizeFirstLetter2 = (str) => {

	const strArray = str.toLowerCase().split(' ')
	for (let i = 0; i < strArray.length; i++) {
		strArray[i] = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1)
	}
	return strArray.join(' ')
}

// console.log((capitlizeFirstLetter2(sent)))

// SOLUTION 3: LOWERCASE ENTIRE STRING AND SPLIT TO AN ARRAY,
// USE MAP METHOD OVER ARRAY TO RETURN A CAPITILIZED FIRST LETTTER
// AND SUBSTRING OF REST OF WORD, USE JOIN METHOD WITH A SPACE
capitlizeFirstLetter3 = (str) => {
	return str.toLowerCase().split(' ')
	.map(word => {
		return word[0].toUpperCase() + word.substring(1)
	})
	.join(' ')
}

// console.log(capitlizeFirstLetter3(sent))

// SOLUTION 4: REGULAR EXPRESSIONS

capitlizeFirstLetter4 = (str) => {
	return str.toLowerCase().replace(/\b[a-z]/gi, function(char) {
		return char.toUpperCase()
	})
}

// console.log(capitlizeFirstLetter4(sent))