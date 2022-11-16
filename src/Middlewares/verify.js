const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const data = req.headers['student-token']

    jwt.verify(data, 'riad123', (err, decoded) => {
        if(err){
            res.json({massage: 'err', err})
        }else{
            // console.log(decoded)
            let username = decoded['data']['UserName']
            let password = decoded['data']['Password']
            // console.log(username)
            req.headers.username = username
            req.headers.password = password
        
            next()
        }
    })
}

module.exports = verifyToken