module.exports = meuMiddleware = (req, res, next) => {
    console.log();
    console.log('Passei pelo middleware');
    next();

}