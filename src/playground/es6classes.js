class Person{
	constructor(name = 'Unknown', age = 0) {
		this.name = name
		this.age = age
	}
	getGreeting() {
	//	return 'Hi, I am '+ this.name + '!' 
	return `Hi, I am ${this.name}!`
	}
	getDescription() {
		return `${this.name} is ${this.age} age old.`
	}
}

class Student extends Person {
	constructor(name, age, major){
		super(name, age)
		this.major = major
	}
	hasMajor(){
		return !!this.major
	}
	getDescription(){
		let description = super.getDescription()

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`
		}

		return description
	}
}

// Traveler -> Person
// Add support for home location

class Traveler extends Person{
	constructor(name, age, location){
		super(name, age)
		this.location = location
	}
	getGreeting(){
		let greeting = super.getGreeting()
		if (location) {
			greeting += ` I'm visiting from ${this.location}`
		}
		return greeting
 }
}

const me = new Traveler('Lorand', 31, 'Bekescsaba')
console.log(me)
console.log(me.getGreeting())
const other = new Student()
console.log(other.getDescription())