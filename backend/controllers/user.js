const User = require('../models/User');

// View

exports.userDetail = async (req, res) => {
    const { userId } = req.params
    const users = await User.findById(userId)

    res.status(200).json(users)
}

// update
exports.updateUser = async (req, res) => {
    const { userId } = req.params
    const { name, lastname, password, image } = req.body
    const updateUser = await User.findByIdAndUpdate(userId, {
        name, lastname, password, image
    }, { new: true })
    rest.status(200).json(updateUser)


