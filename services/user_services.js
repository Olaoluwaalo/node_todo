const UserModel = require('../models/user_model');

class UserService {
    static async registration(name, email, password) {
        try {
            const createUser = new UserModel({
                name, email, password
            });
             await createUser.save();
             return createUser;
        } catch (error) {
            console.log('Error occured in registration');
        }
    }

    static async checkUser(email) {
        try {
            const match =await UserModel.findOne({ email });
            return match;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;