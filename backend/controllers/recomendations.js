const Recomendation = require('../models/Recomendations');
const User = require('../models/User');


//Get Recommendations by crypto for showing... missing filtering by crypt, might just filter on the frontend 
//   exports.getcryptoRecomendations = async (req, res) => {
//       const recomsFiltered={
//           'BTC':[],
//           'XRP':[],
//           'ETH':[]
//       }
//       const { crypt } = req.params
//       const { recomendations } = await Recomendation.find()
//       recomendations.forEach(recomendation=>{
//           recomendationsFiltered
//       })
//       res.status(200).json(recomendations)
//   }

// Get all recommendations
exports.allRecommendations = async (req, res) => {
    const recomendations = await  Recomendation.find()

    res.status(200).json(recomendations)
}

// create
exports.creatRecomendation = async (req, res) => {
    const { estimate, actual, surprise, recomendation } = req.body
    const newRecomendation = await Recomendation.create({
        estimate, actual, surprise, recomendation

    })
    await User.findByIdAndUpdate(id, { $push: { recomendations: newRecomendation._id }})
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

 exports.deleteRecomendation = async (req, res) => {
     const { recomendationId } = req.params
     await Recomendation.findByIdAndDelete(recomendationId)
     res.status(200).json({ message: 'recomendation deleted' })
 }




