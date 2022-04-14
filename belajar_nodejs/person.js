const fs = require("fs");
const os = require("os");
// function createPerson(data) {
//   fs.writeFileSync("./person.json", JSON.stringify(data));
// }

// createPerson({
//   nama: "Joese Rio Telysana",
//   pekerjaan: "Fullstack Developer",
//   alamat: "Jakara",
//   umur: 21,
//   menikah: false,
// });

// const os = require("os");
// console.log("free memory : ", os.freemem());

function spesifikasiLaptop(data) {
  fs.writeFileSync("./spesifikasi.json", JSON.stringify(data));
}

spesifikasiLaptop({
  os: os.type(),
  nama: os.hostname(),
  architecture: os.arch(),
  sisaram: os.freemem(),
});
