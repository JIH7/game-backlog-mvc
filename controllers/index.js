const user = require('../models/user')

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
}