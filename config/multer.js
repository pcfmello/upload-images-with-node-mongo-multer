const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  // Configura o local que o arquivo será salvo
  destination: (req, file, cb) => {
    // cb('algum erro', 'local onde será salvo o arquivo)
    cb(null, "uploads/");
  },
  // Configura o nome do arquivo
  filename: (req, file, cb) => {
    // cb('algum erro', 'nome do arquivo')
    cb(null, Date.now() + path.extname(file.originalname));
    // path.extname pega o nome da extensão do arquivo
    // file.originalname pega o nome do arquivo completo
  },
});

// invoca o multer passando a storage como argumento
const upload = multer({ storage });

module.exports = upload;
