let fs=require("fs");
//const { fileURLToPath } = require("node:url");
let extensionMapping=require("./folder.js");
//console.log(extensionMapping);

//let fs=require("fs");

let testfolderpath="./download";
// let test=testfolderpath+"/"+file;
// console.log(test);

let allfile=fs.readdirSync(testfolderpath);
 console.log(allfile);
// console.log(allfile[0]);
for(let i=0;i<allfile.length;i++)
{
    Sortfile(allfile[i]);
}

function getextension(file)
{
    file = file.split(".");
    return file[1];
}

function checkfolderextension(file)
{
   let extensions=testfolderpath;
   for(let key in extensionMapping )
     {
         let extension=extensionMapping[key];
     if(extension.includes(file))
       {
        extensions=extensions+"/"+key;
        break;
      
        }
     }

     let targetfolder=fs.existsSync(extensions);
     if(!targetfolder)
     {
         fs.mkdirSync(extensions);
     }
     return extensions;
}
function move(file,extension)
{
    let source=testfolderpath+ "/" +file;
    let target=extension+ "/" +file;

    fs.copyFileSync(source,target);
    fs.unlinkSync(source);
}
function Sortfile(file)
{
    let extension=getextension(file);

  let targetfolder=  checkfolderextension(extension);
   console.log(targetfolder);
    move(file,targetfolder);
}