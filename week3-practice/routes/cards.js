const express = require('express') ;
const router = express.Router() ;
const { data } = require('../data/flashcardData.json');
const { cards } = data

//get id parmas
router.get('/', (req, res) => {
    const cardNum = cards.length;
    const cardId = Math.floor(Math.random() * cardNum);

    res.redirect(`/cards/${cardId}`);
})

router.get ('/:id', (req, res) => {
    //get data details
    const { side } = req.query
    const { id } = req.params
    if( !side ) {
       return res.redirect(`/cards/${id}?side=question`)
    }

    const name = req.cookies.username
    const text = cards[id][side]
    const { hint } = cards[id]
    const template = { id, text, name}

    if ( side === 'question') {
        template.hint = hint ;
        template.otherSideToShow = 'answer';
        template.displayBtn = 'Answer';
    } else if ( side === 'answer' ) {
        template.otherSideToShow = 'question';
        template.displayBtn = 'Question';
    }
    res.render('card', template );
})

module.exports = router ;