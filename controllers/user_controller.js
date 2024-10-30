const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user_model');
exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isMatch = await UserModel.findOne({ email });
        if (isMatch) {
            return res.status(400).json({ msg: "User already exist" });
        } else {
            const createUser = new UserModel({
                name, email, password
            });
            await createUser.save();

            return res.status(200).json({ status: true, data: createUser, });

        }
    } catch (error) {
        res.status(500).json({ msg: "Server Error " + error });
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ msg: "User Does not exist" });
    }
    const isMatch = await bcrypt.compareSync(password, user.password,);
    if (isMatch === false) {

        return res.status(400).json({ msg: 'User password does not exist' });

    }
    let tokenData = { _id: user._id, email: user.email, name: user.name };
    const token = await jwt.sign(tokenData, 'SecretKey', { expiresIn: '1h' });
    return res.status(200).json({ status: true, token: token });
}