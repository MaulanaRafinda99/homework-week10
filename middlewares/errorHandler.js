function errorHandler (err, req, res, next) {
    console.log(err);

    if(err.name === "ErrorNotFound") {
        res.status(400).json({ message: "Error Not Found"})
    } else {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = errorHandler;