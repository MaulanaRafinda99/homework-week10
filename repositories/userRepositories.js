// Repositori ini berhubungan langsung dengan Database :
const {User} = require('../models')

class UserRepositories {
    static create = async(params) => {
        try {
            const data = await User.create(params,{
                returning: true
            })
            return data
        } catch (err) {
            throw err
        }
    }
    
    static findAll = async() => {
        try {
            const data = await User.findAll();
            return data;
        } catch (err) {
            throw err
        }
    }

    static findOne = async(id) => {
        try {
            const data = await User.findOne({
                where: {
                    id
                }
            })
            return data;
        } catch (err) {
            throw err
        }
    }
}

module.exports = UserRepositories;