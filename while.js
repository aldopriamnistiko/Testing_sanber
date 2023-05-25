const prompt = require('prompt-sync')({singit: true});

var ulangi = prompt("Are you ready ? "); //Input 1
console.log("start")
var counter = 0;

while(ulangi){
var jawab = prompt("Apakah anda mau mengulang (Yes/no) : ") // Input 1 atau yes atau 0 atau no
counter++;
if(jawab == false || jawab == "no"){
ulangi = false;
}

console.log("pengulangan ke-"+counter)}  //<- 10-17 while(ulangi)