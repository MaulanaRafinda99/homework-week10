const multer = require("multer");
const path = require("path"); 

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Paremater pertama adalah null. Nah karena errornya tidak ada maka diisi saja dengan menggunakan null
        cb(null,  path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

module.exports = diskStorage;