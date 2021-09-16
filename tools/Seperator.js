const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('../raw/lv1.txt'),
    output: process.stdout,
    console: false
});

// console.log(readInterface);
const seperate_by_line = new Array();
readInterface.on('line', line => {
    // console.log(line);
    // seperate_by_line.push(line);
    line.forEach(c => {
        console.log(c+ ',');
    }
});

// console.log(seperate_by_line + "#");
seperate_by_line.forEach(line => {
    console.log("1");
    // console.log('#' + line);
    line.forEach(c => {
        // console.log(c+ ',');
    })
})

// const raw_data = fs.createReadStream('../raw/lv1.txt', 'utf-8', (res, err)=>{
//     if(err)
//         throw err;
//     return res;
// })

// let line = "";
// const seperate_by_line = new Array();
// console.log(raw_data);
// raw_data.forEach(c => {
//     if(c == ' '){
//         seperate_by_line.push(line);
//         line = "";
//     }else{
//         line += c;
//     }
// });

// const seperate_by_line = raw_data.filter('\n');

// console.log(seperate_by_line);