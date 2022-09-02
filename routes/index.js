const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.use((req, res) => res.send('Wrong route! Please double check the url you entered.'))

module.exports = router