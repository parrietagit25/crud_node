const { Router } = require('express');
const querys = require('../querys');

const router = Router();

router.get('/', async (req, res)=>{
    const query = await querys.getAllnotas();
    return res.status(200).json(query);
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const query = await querys.getNoteById(id);
    if (query.length === 0) {
        return res.status(400).json({ message: 'No encontrado' });
    }
    return res.status(200).json(query);
});

router.post('/', async (req, res) => {
    const {titulo, descripcion, stat} = req.body;
    const query = await querys.createNota(titulo, descripcion, stat);
        return res.status(200).json(query);
});

module.exports = router;