const Router=require('express')
const {
    allRecommendations,
    creatRecomendation,
    updateRecomendations,
    deleteRecomendation
}=require('../controllers/recomendations')

const {
    catchErrs,
    isAuth
}=require('../middlewares/auth')

const router=Router()

//Create Recomendation
router.post('/create', isAuth, catchErrs(creatRecomendation))

//Update Recomendation
router.put('/edit/:recommendationId', isAuth, catchErrs(updateRecomendations))

//List All Recomendations
router.get('/allRecommendations', isAuth, catchErrs(allRecommendations))

//List All Crypto Recomendations
// router.get('/:crypt/recommendations', isAuth, catchErrs())

//Delete Recomendation
router.get('/delete/:recomendationId', isAuth, catchErrs(deleteRecomendation))

module.exports=router