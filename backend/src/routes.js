const { Router } = require('express')
const DevContoller = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const router = Router()

// DevContoller
router.get('/devs', DevContoller.index)
router.post('/devs', DevContoller.store)

// SearchContoller
router.get('/search', SearchController.index)

module.exports = router