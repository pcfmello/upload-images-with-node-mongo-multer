const Picture = require("../models/Picture");
const fs = require("fs");

exports.create = async (req, res) => {
  try {
    // nome do arquivo vem do body
    const { name } = req.body;

    // Arquivo vem do .file
    const file = req.file;

    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();

    res.json({ picture, message: "Imagem salva com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar imagem" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagens" });
  }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    console.log("passou", picture);

    // remove o arquivo da pasta uploads
    fs.unlinkSync(picture.src);

    // remove o registro do bd
    await Picture.deleteOne({ _id: picture._id });

    res.json({ message: "Imagem removida com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir imagem" });
  }
};
