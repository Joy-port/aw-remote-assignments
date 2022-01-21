const { response } = require('express');
const express = require('express');
const router = express.Router();

//for assignment 2 3
router.get('/', (req, res) =>{
    const { number } = req.query;
    const template = {} ;
    if( !number ) {
        template.msg = 'Lack of Parameter';
        console.log(number)
    } else {
        if ( !Number( number ) ) {
            template.msg = 'Wrong Parameter';
        } else {
            const endNum = Number( number ) ;
            let total = 0;
            total = (endNum + 1) * endNum / 2;
            template.msg = total;
        }
    }
    res.render('getData', template)
})

router.post('/', (req, res) => {
    res.redirect('/getData');
})

module.exports = router;