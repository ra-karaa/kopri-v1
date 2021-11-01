const pegawaiController = require('../controllers').pegawai;
const konsulController = require('../controllers').konsul;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/pegawai', pegawaiController.findAll);
  app.post('/api/pegawai', pegawaiController.create);
  app.get('/api/pegawai/:id', pegawaiController.findId);
  app.put('/api/pegawai/:id', pegawaiController.update);
  app.delete('/api/pegawai/:id', pegawaiController.delete);
  app.get('/api/pegawai/akses_id', pegawaiController.findNotNull);

  app.get('/api/konsul', konsulController.getKonsulUser);
};