const Todo = require('../Models/Todo');

const getAllTodo = async (req, res) => {
    try {
        const getAllTodo = await Todo.find({});
        if(getAllTodo === null) {
            return res.status(404).json({msg: "You have no Todo"})
        } else {
            res.status(200).json({getAllTodo});
        }
        
    } catch (error) {
        res.status(500).json({msg: "There was a server error!"});
    }
}
const createTodo = async (req, res) => {
    try {
        const create = await Todo.create(req.body);
        res.status(200).json({create})
    } catch (error) {
        res.status(500).json({msg: "There was a server error"});
    }
}
const getSingleTodo = (req, res) => {
    res.status(200).json({msg: "get single todo"});
}
const updateTodo = (req, res) => {

    res.status(200).json({msg: "update todo", 
    id: req.params
});
}
const deleteTodo = (req, res) => {
    res.status(200).json({msg: "Delete todo", 
    id: req.params
});
}


module.exports = {getAllTodo, getSingleTodo, updateTodo, deleteTodo, createTodo}
