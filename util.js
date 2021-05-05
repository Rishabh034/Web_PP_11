let fs = require("fs");
//let filekadata = fs.readFileSync("./abc.txt", "utf-8");
//console.log(filekadata);

//let ch = filekadata.split("\r\n");
// console.log(ch);
function getfiledata(file) {
    let data = "";
    for (let i = 0; i < file.length; i++) {
        if (!fs.existsSync(file[i])) {
            console.log("file does not exist");
            return;
        }
        if(i==file.length-1)
        data += fs.readFileSync(file[i]);
        else
        data +=fs.readFileSync(file[i]) + "\r\n";
    }
    return data;
}

function getSfiledata(ch1) {
    let ch = ch1.split("\r\n");
    let emptyincluded = false;
    let removespace = [];
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] == "" && emptyincluded == false) {
            removespace.push(ch[i]);
            emptyincluded = true;
        }
        else if (ch[i] != "") {
            removespace.push(ch[i]);
            if (i < ch.length - 2) emptyincluded = false;
        }

    }
    //console.log(removespace);
    //  return removespace;

    let data = removespace.join("\r\n");
    return data;
}
function Bfiledata(ch1) {
    let ch = ch1.split("\r\n");
    let count = 1;
    let removespace = [];
    let emptyincluded = false;

    for (let i = 0; i < ch.length; i++) {
        if (ch[i] == "" && emptyincluded == false) {
            removespace.push( ch[i]);
            emptyincluded = true;
            count++;
        }
        else if (ch[i] != "") {
            removespace.push(count + "." + ch[i]);
            if (i < ch.length - 2) emptyincluded = false;
            count++;
        }
        // count++;
    }
    let data = removespace.join("\r\n");
    return data;
}
function nfiledata(ch1) {
    let ch = ch1.split("\r\n");
    let removespace = [];
    let count = 1;

    for (let i = 0; i < ch.length; i++) {
        if (ch[i] == "") {
            removespace.push(count + "." + ch[i]);
            count++;
        }
        else {
            removespace.push(count + "." + ch[i]);
            count++;
        }
    }
    let data = removespace.join("\r\n");
    return data;
}

module.exports =
{
    getfiledata: getfiledata,
    getSfiledata: getSfiledata,
    Bfiledata: Bfiledata,
    nfiledata: nfiledata

}