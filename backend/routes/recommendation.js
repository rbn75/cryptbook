const Router=require('express')
const {
    getRecomendationDetail,
    creatRecomendation,
    updateRecomendations
}=require('../controllers/recomendations')

const {
    catchErrs,
    isAuth
}=require('../middlewares/auth')

const router=Router()

//Create Recomendation
router.post('/create', isAuth, catchErrs())

//Update Recomendation
router.put('/edit/postId', isAuth, catchErrs())

//List All Recomendations
router.get('/allRecommendations', isAuth, catchErrs())

//List All Crypto Recomendations
router.get('/:crypt/recommendations', isAuth, catchErrs())

//Delete Recomendation
router.get('/delete/:recomendationId', isAuth, catchErrs())

module.exports=router