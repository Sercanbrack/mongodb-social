const connection = require('../config/connection')
const { User, Thought } = require('../models')
const { getRandomUsername, getRandomThought, getRandomEmail } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connected!');

    await Thought.deleteMany({})

    await User.deleteMany({})

    const users = []

    for (let i = 0; i < 6; i++) {
        const username = getRandomUsername();
        const thought = getRandomThought();
        const email = getRandomEmail();

        users.push({
            username,
            thought,
            email,
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