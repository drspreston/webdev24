let today = new Date();
console.log(today.toLocaleString());
console.log(today.getHours());
console.log(today.getUTCHours());
console.log(today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear());
let temp = `Today is ${today.toLocaleDateString()}`;
console.log(temp);