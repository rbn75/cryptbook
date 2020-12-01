const Router=require('express')
const { get } = require('mongoose')
const {
    getPostDetail,
    creatPost,
    updatePost,
    deletePost
}=require('../controllers/post')

const {
    catchErrs,
    isAuth
}=require('../middlewares/auth')

const router=Router()

//Create Post
router.post('/create', isAuth, catchErrs(creatPost))

//Update Post
router.put('/edit/:postId', isAuth, catchErrs(updatePost))

//List All posts
router.get('/allPosts', catchErrs(isAuth))

//Post Details
router.get('/detail/:postId', isAuth, catchErrs(getPostDetail))

//Delete Post
router.get('/delete/:postId', isAuth, catchErrs(deletePost))

module.exports=router


