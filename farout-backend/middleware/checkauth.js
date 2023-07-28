const jwt = require('jsonwebtoken');


const secretKey = process.env.SECRET_KEY || 'secret' ;

module.exports = (req, res, next) => {

    if (req.method == 'GET') {
        
        return next();
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, secretKey);
        req.userData = decoded;
           
        console.log(req.userData)
          
        const userRole = decoded.role;

        if (userRole !== "admin") {
            return res.status(403).json({
                message: 'Access forbidden. Insufficient privileges.'
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
