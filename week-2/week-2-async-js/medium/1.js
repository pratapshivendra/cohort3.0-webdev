const fs = require("fs");

const cleaner = (filename) => {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) console.log("Something went wrong while reading the file!");
    else {
        const cleaneddata = data.replace(/\s+/g,' ').trim();
        fs.writeFile(filename,cleaneddata,'utf-8',(err) => {
            if(err)
                console.log("Something went wrong while writing in the file...");
            else
                console.log("Success");
        });
    }
  });
};

cleaner('a.txt');