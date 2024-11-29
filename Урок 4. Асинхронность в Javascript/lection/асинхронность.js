console.log('Start calculations');
for (let i = 0; i < 10000000; i++){
    const newDate = new Date(i);
}
console.log('End log calculations');

console.log('Start algorithm');
setTimeout(function timeout() {
    console.log('This will be printed after 5 seconds!');
}, 5000);
console.log('End syncronous code');