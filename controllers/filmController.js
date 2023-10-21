const FilmService = require("../services/filmService.js")

class FilmController {
    static create = async (req, res, next) => {
        try {
            const data = await FilmService.create(req.body)

            res.status(201).json(data);
        } catch (err) {
            next(err)
        }
    }

    static findAll = async (req, res, next) => {
        try {
            const data = await FilmService.findAll();
           
            res.status(200).json(data);

        } catch (err) {
            next (err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const data = await FilmService.findOne(req.params);

            if (!data) {
                throw {name: "ErrorNotFound"}
            }
            res.status(200).json(data)

        } catch (err) {
            next(err)
        }
    }

    static uploadImage = async (req, res, next) => {
        try {
            const params  = {
                file: req.file,
                id: req.params.id   
            }
            const data = await FilmService.uploadImage(params);

            res.status(200).json(data);
        } catch (err) {
            next(err)
        }
    }

    static destroy = async (req, res, next) => {
        try {
            await FilmService.destroy(req.params);
            res.status(200).json({message: "Delete Successfully"});
        } catch (err) {
            next(err)
        }
    }

    static updateFilm = async (req, res, next) => {
        try {
            
            const data = await FilmService.updateFilm(req.body);

            res.status(200).json({
                message: "Film Updated Succesfully",
            }, data)
        } catch (err) {
            next(err)
        }
    }
}


module.exports = FilmController;

