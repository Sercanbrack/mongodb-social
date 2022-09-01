const usernames = [
    'testname',
    'march33',
    'interoGATOR',
    '3o9',
    'memphisouttheback',
]

const thoughts = [
    'this is a test!',
    "wow, I'm making a post!",
    "here we go...",
    "oh no!!!!",
    "how do I make you love me?",
    "AAAA",
    "can we get much higher???",
]



const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomUsername = () => `${getRandomArrItem(usernames)}`

const getRandomThought = () => `${getRandomArrItem(thoughts)}`

module.exports = { getRandomUsername, getRandomThought }