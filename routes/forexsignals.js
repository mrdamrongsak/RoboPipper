const express = require('express')
const router = express.Router()
const Forexsignals = require('../models/forexsignals')

// All ForexSignals Route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const forexsignals = await Forexsignals.find(searchOptions)
        res.render('forexsignals/index', { 
            forexsignals: forexsignals,
            searchOptions: req.query 
        })
    } catch {
        res.redirect('/')
    }
    
})

// New Author Route
router.get('/new', (req, res) => {
    res.render('forexsignals/new', { forexsignals: new Forexsignals() })
})

// Create ForexSignals Route
router.post('/' , async (req, res) => {
    const forexsignals = new Forexsignals({
        name: req.body.name
    })
    try {
        const newForexsignals = await forexsignals.save()
        res.redirect(`forexsignals`) 
    } catch {
        res.render('forexsignals/new', {
            forexsignals: forexsignals,
            errorMessage: 'Error Creating Forexsignal'
        })
    }
})

module.exports = router