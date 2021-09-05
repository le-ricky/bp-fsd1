const User = require('../models/user')

exports.createUser = (req, res) => {
    // console.log('CREATE USER', req.body)

    const { name, email, phoneNumber, address } = req.body;

    // create new user
    const newUser = new User({ name, email, phoneNumber, address})
    newUser.save((err, user) => {
        if(err) {
            console.log(err)
            return res.status(401).json({
                error: "Error saving user"
            })
            
        }
        return res.json({
            message: 'User Saved'
        })
    })

};

