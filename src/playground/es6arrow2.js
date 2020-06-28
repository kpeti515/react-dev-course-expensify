//arguments object - no longer bound with arrow functions

const add = (a, b) => {
	//console.log(arguments)
	return a + b
}
console.log(add(55,1,1001))

// this keyword - no longer bound

const user = {
	name: 'Lorand',
	cities: ['Miskolc', 'Bekescsaba', 'Budapest'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city)
	}
}
console.log(user.printPlacesLived())


// challange
 const multiplier = {
	 numbers: [1,2,3],
	 multiplyby: 2,
	 multiply() {
		 return this.numbers.map((number) => number * this.multiplyby)
	 }
 }
 console.log(multiplier.multiply())