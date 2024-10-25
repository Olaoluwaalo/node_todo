const TodoModel = require('../models/todo_model');

exports.createTodo = async (req, res, next) => {
  try {
    const { userId, title, description } = req.body;
    const createTodo = new TodoModel({ userId, title, description });
    const data = await createTodo.save();
    res.status(200).json({ data });

  } catch (error) {
    res.status(500).json({ msg: "Error occurred in the server" });
  }
}

exports.getTodo = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const todo = await TodoModel.find({ userId });
    res.status(200).json({ success: todo });
  } catch (error) {

    res.status(500).json({ msg: "Error occurred in the server" });
  }
}
// 6718830a64834175363e0567

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.body;
    const deleteData = await TodoModel.findOneAndDelete({ _id: id });
    res.status(200).json({ deleteData });
  } catch (error) {

    res.status(500).json({ msg: "Error occurred in the server" });
  }
}


exports.updateTodo = async (req, res, next) => {
  try {
    const { id, title, description } = req.body; 
    const updatedTodo = await TodoModel.findOneAndUpdate(
      { _id: id }, 
      { title: title, description: description }, 
      { new: true } 
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({
      message: 'Todo updated successfully',
      data: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating todo',
      error: error.message,
    });
  }
};
