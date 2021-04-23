const router = require ('express').Router();

const apiFilmsRou = require ('./api/films')

router.use('/films', apiFilmsRou);

module.exports = router;