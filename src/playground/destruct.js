// Array destructing

const address = ['1299 S Juniper Street', 'Philadelphia', , '19147']
const [, city, state = 'New York', zip] = address
console.log(`You are in ${city} ${state}.`)

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
const [itemname, small, med, big] = item
console.log(`A small ${itemname} cost ${small} `)

// Object destructuring
const person = {
 // name: 'Lorand',
  age: 26,
  location: {
    city: 'Miskolc',
    temp: 32
  }
}
const {name: firstname = 'Lol', age} = person

console.log(`${firstname} is ${age} year old`)
const {temp: temperature, citi} = person.location
if (citi && temperature) {
  console.log(`I's ${citi} in ${temperature}`)  
}

const book = {
  title: 'ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name:'Penguin'
  }
}

const {name: publisherName = 'Self-published'} = book.publisher
console.log(publisherName)