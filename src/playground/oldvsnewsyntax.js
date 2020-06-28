// class OldSyntax {
//   constructor() {
// 		this.name = 'Mike'
// 		this.getGreeting = this.getGreeting.bind(this) // fixing the undefined error in line 18
// 	}
// 	getGreeting() {
// 		return `Hi. My name is ${this.name}`
// 	}
// }

// const oldSyntax = new OldSyntax
// const getGreeting = oldSyntax.getGreeting
// //console.log(oldSyntax.getGreeting()) // my name is mike
// console.log(getGreeting()) // undefined error


// class NewSyntax {
// 	name= 'Jen'
// 	getGreeting = () => {
// 		return `Hi. My name is ${this.name}`
// 	}
// }

// const newSyntax = new NewSyntax
// const newGetgreeting = newSyntax.getGreeting
// console.log(newGetgreeting())