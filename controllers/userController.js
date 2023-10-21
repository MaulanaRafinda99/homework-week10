// Fungsi Controller :
// - Menerima Request
// - Mengirim Response

const UserService = require('../services/userService.js')

class UserController {

    // Kenapa dia static adalah supaya kita bisa memanggilnya di dalam folder routesd
    static create = async (req, res, next) => {
        try {
    
            const data = await UserService.create(req.body);

            res.status(201).json(data)
        } catch (err) {
            next(err)
        }

    }

    static findAll = async (req, res, next) => {
        try {
            const data = await UserService.findAll();

            res.status(200).json(data);
        } catch (err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const data = await UserService.findOne(req.params)

            if(!data) {
                throw {name: "ErrorNotFound"}
            }

            res.status(200).json(data);
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController;