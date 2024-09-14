const fs = require("fs")

fs.readFile('a.txt','utf-8', (err,data) => {
    if(err)
        console.log("Error!");
    else
        console.log(data);
}) 

const expensive = () => {
    cnt = 0;
    for(let i = 0; i<100000000; i++)
        cnt++;
}
console.log("Expensive operation is starting...");
expensive();