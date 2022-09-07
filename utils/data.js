const usernames = [
    'testname',
    'march33',
    'interoGATOR',
    '3o9',
    'memphisouttheback',
]

const emails = [
    'test@test.com',
    'test2@test2.com',
    'randomposter@dotnet.com',
    'asdf@ghjkl.net',
    'renownedpork@farmersonly.com',
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

const getRandomEmail = () => `${getRandomArrItem(emails)}`

module.exports = { getRandomUsername, getRandomThought, getRandomEmail }