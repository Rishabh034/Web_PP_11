//const { fileURLToPath } = require("node:url");
//const { isRegExp } = require("node:util");

//const { fstat } = require("node:fs");

// console.log(process);
let content = process.argv.slice(2);
// console.log(content);
const fs = require("fs");
const { getfiledata, getSfiledata, Bfiledata, nfiledata } = require("./util");
//const { readFileSync } = require("node:fs");
const file = [];
const flag = [];

for (let i = 0; i < content.length; i++) {
    if (!content[i].startsWith("-")) {
        file.push(content[i]);
    }
    else
        flag.push(content[i]);
}



let filesdata = getfiledata(file);
//console.log(filesdata);

if(flag.includes("-s"))
{
  filesdata=   getSfiledata(filesdata);
}
// console.log(filesdata);
if(flag.includes("-b") && flag.includes("-n"))
{
    if(flag.indexOf("-b")<flag.indexOf("-n"))
      filesdata=Bfiledata(filesdata);
      else
      filesdata=nfiledata(filesdata);
}
else if(flag.includes("-b"))
{
    filesdata=Bfiledata(filesdata);
}
else if(flag.includes("-n"))
{
    filesdata=nfiledata(filesdata);
}
 
console.log(filesdata);