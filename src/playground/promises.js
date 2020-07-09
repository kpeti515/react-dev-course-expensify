const promise =  new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve({
  //     name: 'This is my resolved data',
  //     age: 26
  //   })
  // }, 1500);
  reject('something went wrong')
});

console.log('before');

promise.then((data) => {
  console.log('1',data);
}).catch((error) => {
  console.log('error', error);
})


console.log('object');