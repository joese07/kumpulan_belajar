const fs = require("fs");
const os = require("os");

function spesifikasiLaptop(data) {
  fs.writeFileSync("./spesifikasi.json", JSON.stringify(data));
}

spesifikasiLaptop({
  os: os.type(),
  nama: os.hostname(),
  architecture: os.arch(),
  sisaram: os.freemem(),
});
