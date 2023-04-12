const router = require('express').Router();
const {getAllTodo, getSingleTodo, updateTodo, deleteTodo, createTodo} = require('../Controllers/Controllers')

router.get('/', getAllTodo);
router.post('/', createTodo);
router.get('/:id', getSingleTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo)

module.exports = router;