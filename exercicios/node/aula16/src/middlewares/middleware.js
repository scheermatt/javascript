exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Valor da variável local';
    next();
};

exports.outroMiddleware = (req, res, next) => {

    next();
};
