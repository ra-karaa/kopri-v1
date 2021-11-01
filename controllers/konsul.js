const db = require("../models");
const Konsul = db.konsul;
const Op = db.Sequelize.Op;

exports.getKonsulUser = (req, res) => {

    Konsul.findAll(
        { include: 'pegawai' }
    ).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

}

