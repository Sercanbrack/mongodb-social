const router = require('express').Router()
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend,
    
} = require('../../controllers/userController');

router.route('/')
    .get(getUsers)
    .get(getSingleUser)
    .post(createUser)
    .delete(deleteUser)
    .put(updateUser);

router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
