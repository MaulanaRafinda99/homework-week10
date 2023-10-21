const UserRepositories = require("../repositories/userRepositories.js")

class UserService {

    static create = async (params) => {
        try {
            const {email, username, password} = params;
            const payload  = {
                email, 
                username,
                password
            }
            const data = await UserRepositories.create(payload)
            return data;
        } catch (err) {
            throw err
        }
    }

    static findAll = async () => {
        try {
            const data = await UserRepositories.findAll();
            return data;
        } catch (err) {
            throw err
        }
    }

    static findOne = async (params) => {
        try {
            const {id} = params;

            const data = await UserRepositories.findOne(id);
            return data;
        } catch (err) {
            throw err
        }
    }

}

module.exports = UserService;