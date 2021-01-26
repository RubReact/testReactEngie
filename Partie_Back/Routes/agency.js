
/*const express = require('express');
const router = express.Router();

const agencyfile = require('../models/datas.json');

const agencyList = JSON.parse(agencyfile);

router.route('/').get((req,res)=>{
    res.json(agencyList);
});


module.exports = router;
*/
const userRoutes = (app, fs) => {
  // variables
  const dataPath = './models/datas.json';

  // READ
  app.get('/agencies', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = userRoutes;
