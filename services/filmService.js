const FilmRepositories = require("../repositories/filmRepositories.js")
const { Film } = require("../models")

class FilmService {
    static create = async (params) => {
        try {
            const {title, genre, year, user_id} = params; 
            const payload = {
                title,
                genre,
                year,
                user_id
            }
            const data = await FilmRepositories.create(payload)
            return data
        } catch (err) {
           throw err 
        }
    }

    static findAll = async () => {
        try {
            const data = await FilmRepositories.findAll();
            return data;
        } catch (err) {
            throw err
        }
    }

    static findOne = async (params) => {
        try {
            const {id} = params;
            const data = await FilmRepositories.findOne(id);
            return data;
        } catch (err) {
            throw err
        }
    }

    static uploadImage = async (params) => {
        try {
            const {file, id} = params;
            const image_url = `http://localhost:3000/uploads/${file.filename}`;
            const payload = {
                image_url
            }
            const data = await FilmRepositories.uploadImage(id, payload);
            return data; 
        } catch (err) {
            throw err
        }
    }

    static destroy = async (params) => {
        try {
            const {id} = params;
            

            await FilmRepositories.destroy(id);
        } catch (err) {
            throw err
        }
    }

    static updateFilm = async (params) => {
        const {id} = params;
        const foundFilm = await Film.findOne({
            where: {
                id
            }
        })
        const payload = await foundFilm.updateFilm({
            title: title || foundFilm.title,
            genre: genre || foundFilm.genre,
            year: year || foundFilm.year
        }, { returning: true })

        const data = await FilmRepositories.updateFilm(id, payload);

        res.status(200).json({
            message: "Film Updated Succesfully",
        },data)
    }
} 

module.exports = FilmService;