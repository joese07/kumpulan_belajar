// const identitas = require("./person.json");
// console.log(identitas);

const spesifikasi = require("./spesifikasi.json");
const os = require("os");
console.log(spesifikasi, "sisa Memori", os.freemem());
