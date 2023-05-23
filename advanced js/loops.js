for (let i = 1; i < 10+1; i++) {
    console.log(i);
}
// my first time working with the 'for of' loop
let Users = ['Ray', 'Kemo', 'Fay', 'Onesh'];
for (user of Users) {
    let userLength = user.length
    console.log(user + ' has ' + userLength + ' characters.');
}
'\n'
'\n'
//using the 'for... in' loop
//declaring an object first
const loggedInUser = {
    name: 'Rach',
    age: 25,
    asAdmin: true
}
console.log('\n ')
for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

//using while loops
let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to close the browser?')
}
console.log('Done');