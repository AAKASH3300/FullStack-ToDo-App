const {Router}=require('express');
const { getToDo, saveToDo, UpdateToDo, DeleteToDo } = require('../controllers/ToDoController');
const router = Router()

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',UpdateToDo)
router.post('/delete',DeleteToDo)

module.exports=router;