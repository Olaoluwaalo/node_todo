const router = require('express').Router();
const todoController = require("../controllers/todo_controller");

router.post("/create/todo", todoController.createTodo);
router.post("/getTodo", todoController.getTodo);
router.delete("/deleteTodo", todoController.deleteTodo);
router.put("/updateTodo", todoController.updateTodo);
module.exports = router;