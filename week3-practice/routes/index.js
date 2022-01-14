const express = require('express');
const router = express.Router();

const languages = [
    'Japanese',
    'Chinese',
    'English',
    'German'
]

// router.use((req, res, next) => {
//     const err = new Error('Oh oh something went wrong...');
//     err.status = 500
//     next(err)
// })

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if ( name ) {
        res.render('index', { languages, name })
    } else {
        res.redirect('/hello');
    }
})

router.get('/hello', (req,res) => {
    const name = req.cookies.username;
    if ( name ) {
        res.redirect('/')
    } else {
        res.render('hello')
    }
})
router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/')
})

router.post('/clear', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello')
})

module.exports = router ;