const mongoose= require("mongoose");
const db= require("../config/db");
const UserModel= require('./user_model');
const{Schema}= mongoose;

const todoSchema= new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:UserModel.modelName,
    },
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    }
});

const TodoModel= db.model("todo", todoSchema);
module.exports= TodoModel;