const mongoose = require('mongoose')
const { urlDb } = require('../config')

mongoose.connect(urlDb, {
	useUnified: true,
	useFindAndModify: true,
	useCreateIndex: true,
	userNewUrlParser: true,
})

const db = mongoose.connection

module.exports = db
