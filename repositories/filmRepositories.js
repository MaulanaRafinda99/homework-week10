const {Film} = require("../models")

class FilmRepositories {
    static create = async (params) => {
        try {
            const data = await Film.create(params, {
                returning: true
            })
            return data
        } catch (err) {
            throw err
        }
    }

    static findAll = async () => {
        try {
            const data = await Film.findAll();
            return data;
        } catch (err) {
            throw err
        }
    }

    static findOne = async (id) => {
        try {
            const data = await Film.findOne({
                where: {
                    id
                }
            })
            return data;
        } catch (err) {
            throw err
        }
    }

    static uploadImage = async (id, payload) => {
        try {
            const foundFilm = await Film.findOne({
                where: {
                    id
                }
            })
            if(!foundFilm) {
                throw {name: "ErrorNotFound"}
            }

            await foundFilm.update(payload);
            return foundFilm;
        } catch (err) {
            throw err
        }
    }

    static destroy = async (id) => {
        try {
            const foundFilm = await Film.findOne({
                where: {
                    id
                }
            })

            if(!foundFilm) {
                throw {name: "ErrorNotFound"}
            }
            await foundFilm.destroy();
        } catch (err) {
            throw err
        }
    }
    
    static updateFilm = async (id, payload) => {
        try {

            const foundFilm = await Film.findOne({
                where: {
                    id
                }
            })

            if (!foundFilm) {
                throw {name: "ErrorNotFound"}
            }
            await foundFilm.update(payload)

        } catch (err) {
            throw err
        }
    }
}

module.exports = FilmRepositories;