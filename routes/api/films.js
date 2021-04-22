const router = require ('express').Router();

const { film } = require('../../db') //Modelo de BD usado na exportação

router.get('/', async (req, res) => {
    const Films = await film.findAll();
    res.json (Films);
});

router.post('/', async (req, res) => {
    const Film = await film.create(req.body)
    res.json(Film)
})

module.exports = router; 