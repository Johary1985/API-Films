const router = require ('express').Router();

const crudFilms = require ('./api/films')

router.use('/films', crudFilms); //Tudo aquelo que tenha a palavra "films" vein nesta rota.

module.exports = router;