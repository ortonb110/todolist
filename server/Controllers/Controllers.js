const Todo = require("../Models/Todo");

const getAllTodo = async (req, res) => {
  try {
    const getAllTodo = await Todo.find({});
    if (getAllTodo === null) {
      return res.status(404).json({ msg: "You have no Todo" });
    } else {
      res.status(200).json({ getAllTodo });
    }
  } catch (error) {
    res.status(500).json({ msg: "There was a server error!" });
  }
};
const createTodo = async (req, res) => {
  try {
    const create = await Todo.create(req.body);
    res.status(200).json({ create });
  } catch (error) {
    res.status(500).json({ msg: "There was a server error" });
  }
};
const getSingleTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const getTodo = await Todo.findById(todoID);
    if (!getTodo) {
      return res.status(404).json({ msg: "This todo does not exist" });
    } else {
      res.status(200).json({ getTodo });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "There was a server error, please again later" });
  }
};
const updateTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const update = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
    });
    if(update === null) {
        return res.status(404).json({msg: "There was an error"});
    } else {
        res.status(200).json({update});
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "There was a server error, please again later" });
  }
};
const deleteTodo = async (req, res) => {
    try {
        const { id: todoID } = req.params;
        const deleteTodo = await Todo.findOneAndDelete({_id: todoID});
        if (!deleteTodo) {
          return res.status(404).json({ msg: "This todo does not exist" });
        } else {
          res.status(200).json({ deleteTodo });
        }
      } catch (error) {
        res
          .status(500)
          .json({ msg: "There was a server error, please again later" });
      }
};




module.exports = {
  getAllTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  createTodo,
};
