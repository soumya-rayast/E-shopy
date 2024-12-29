const jwt = require('jsonwebtoken');
const protect = (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith('Bearer')) {
        token = token.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_Secret);
            req.user = decoded;
            next()
        } catch (error) {
            res.status(401).json({ message: "Unauthorized" });
        }
    }
    else {
        res.status(401).json({ message: 'No token , authorized denied' })
    }
}
module.exports = { protect }