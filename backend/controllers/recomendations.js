const Recomendation = require('../models/Recomendations');
const User = require('../models/User');


// crud for posting,requires postId... 
// exports.getRecomendation = async (req, res) => {
//     const { user: { id } } = req
//     const { recomendations } = await User.findById(id).populate('recomendations')
//     res.status(200).json(recomendations)
// }

// View
exports.getRecomendationDetail = async (req, res) => {
    const { recomendationId } = req.params
    const recomendation = await  Recomendation.findById(recomendationId)

    res.status(200).json(recomendation)
}

// create
exports.creatRecomendation = async (req, res) => {
    const { estimate, actual, surprise, recomendation } = req.body
    const newRecomendation = await Recomendation.create({
        estimate, actual, surprise, recomendation

    })
    await User.findByIdAndUpdate(id, { $push { recomendations: newRecomendation._id }})
res.status(201), json(newRecomendation)
}

// update
exports.updateRecomendations = async (req, res) => {
    const { recomendationId } = req.params
    const { estimate, actual, surprise, recomendation } = req.body

    const updateRecomendations = await Recomendation.findByIdAndUpdate(recomendationId, {
        title, comment, image
    }, { new: true })

    res.status(200).json(updateRecomendation)
}



// delete, don´t know if needed
// exports.deleteRecomendation = (req, res) => {
//     const { recomendationId } = req.params
//     await Recomendation.findByIdAndDelete(recomendationId)
//     res.status(200).json({ message: 'recomendation deleted' })
// }




