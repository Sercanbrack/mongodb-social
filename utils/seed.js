const connection = require('../config/connection')
const { User, Thought } = require('../models')
const { getRandomUsername, getRandomThought } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connected!');

    await Thought.deleteMany({})

    await User.deleteMany({})

    const users = []

    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername();
        const thought = getRandomThought();

        users.push({
            username,
            thought,
        })
    }

    await User.collection.insertMany(users)

    await Thought.collection.insertOne({
        username: [...users],
    })

    console.table(users)
    console.info('Successfully seeded database!')
    process.exit(0)
})