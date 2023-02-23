module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },

    getLogin: (req,res)=>{
        res.render('loginPage.ejs')
    },

    getSignup: (req,res)=>{
        res.render('signupPage.ejs')
    },
}