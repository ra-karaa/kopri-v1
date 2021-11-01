const db = require("../models");
const Pegawai = db.pegawai;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Pegawai.findAll({ include: ["konsul"] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.create = (req, res) => {
    
    const pegawai = {
        name : req.body.name,
        phone : req.body.phone,
        alamat : req.body.alamat
    }

    Pegawai.create(pegawai)
    .then(data => {
        res.send(data);
    }). catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
}

exports.findId = (req, res) => {
    const name = req.params.name;

    Pegawai.findOne(name)
    .then(data => {
        if(data){
            res.send(data);
        }  else {
            res.status(404).send('Data Tidak Ada');
        }
    }).catch(e => {
        res.status(500).send('Terjadi Error Pada Server');
    });
}

exports.update = (req, res) => {
    const id = req.params.id;

    const data = {
        name : req.body.name,
        alamat : req.body.alamat,
        phone : req.body.phone,
        akses_id : req.body.akses_id
    }
 
    Pegawai.update(data, {
        where : {id :  id}
    }). then(num => {
        if(num == 1){
            res.send('Data berhasil di update');
        } else {
            res.send('Gagal Update Data');
        }
    }) . catch(e => {
        res.status(500).send('Terjadi error Pada Server');
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Pegawai.destroy({
        where : {id : id}
    }).then(num => {
        if(num == 1){
            res.send('Berhsil Hapus Data');
        } else {
            res.send('Gagal Hapus Data');
        }
    }). catch(e => {
        res.send('Terjadi Error Pada Server');
    })
}

exports.findNotNull = (req, res) => {
    
    const condition = {id: {  [Op.ne]: null}};

    Tutorial.findAll({
        where: {
           condition
         },
         limit: 10,
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}
  