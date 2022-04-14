// Belajar tentang import dan export pada node.js
// const os = require("os");
// const luasPersegi = require("./luaspersegi");
// console.log("free memory : ", os.freemem());
// console.log("jumlah luas persegi adalah :", luasPersegi(4));

const fs = require("fs");
// const isi = fs.readFileSync("./text.txt", "utf-8");
// console.log(isi);

fs.writeFileSync("./belajar.txt", "Im Fullstack Dev");
