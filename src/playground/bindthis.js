const obj = {
	name:'Vikram',
	getName(){
		return this.name
	}
}

const getName = obj.getName.bind(obj)
console.log(getName())

console.log(obj.getName())