const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
});

userSchema.pre('save', async function () {
    try {
        var user = this;
        var salt = await bcrypt.genSaltSync(10);
        const crypt = await bcrypt.hashSync(user.password, salt);
        user.password = crypt;
    } catch (error) {

    }
});
const UserModel = db.model('user', userSchema,);
module.exports = UserModel;