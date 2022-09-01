const connection = require('../config/connection')
const { User, Thought } = require('../models')
const { getRandomUsername, getRandomThoughts } = require('./data')

connection.on('error', (err) => err)