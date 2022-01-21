const express = require('express');
const router = express.Router();

//for assignment 1
router.get('/', (req, res)=>{
    res.render('index')
})

router.post('/', (req, res) => {
    res.clearCookie('username')
    res.redirect('/')
})
// for assignment 4

router.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if ( name ) {
        res.render('myName', { name });
    } else {
        res.render('myName');
    }
})

router.post('/myName', (req, res) => {
    res.redirect('/myName');
})

router.get('/trackName', (req, res) => {
    const { name } = req.query ;
    if (name) {
        res.cookie('username', name);
    }
    res.redirect('/myName');
})

router.post('/trackName', (req, res) => {
    const name = req.body.username;
    res.cookie('username', name);
    res.redirect('/myName');
})

router.post('/sum.html', (req, res)=>{
    res.redirect('/sum.html');
})

module.exports = router;