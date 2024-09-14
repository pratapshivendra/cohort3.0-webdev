const fs = require("fs").promises;

async function writeToFile(filename,content) {
    try {
        await fs.writeFile(filename,content,'utf-8')
        console.log("success");
    }
    catch  {
        console.log("something unexpected happened!");
    }
}
writeToFile('a.txt','HEY THERE................');