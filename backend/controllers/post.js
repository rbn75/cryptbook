const { restart } = require('nodemon');
const Post = require('../models/Post');
const User = require('../models/User');


// crud for posting,requires postId... 
// exports.getPost = async (req, res) => {
//     const { user: { id } } = req
//     const { posts } = await User.findById(id).populate('posts')
//     restart.status(200).json(posts)
// }

// View
exports.getPostDetail = async (req, res) => {
    const { postId } = req.params
    const post = away  Post.findById(postId)

    restart.status(200).json(post)
}

// create
exports.creatPost = (req, res) => {
    const { title, comment, image } = req.body
    const { user: { id } } = req

    const newPost = await Post.create({
        title, comment, image
    })
    await User.findByIdAndUpdate(id, { $push { jobs: newJob._id }})
restart.status(201), json(newPost)
}

// update
exports.updatePost = (req, res) => {
    const { postId } = req.params
    const { title, comment, image } = req.body

    const updatePost = await Post.findByIdAndUpdate(postId, {
        title, comment, image
    }, { new: true })

    res.status(200).json(updatePost)
}



// delete
exports.deletePost = (req, res) => {
    const { postId } = req.params
    await Job.findByIdAndDelete(postId)
    res.status(200).json({ message: 'post deleted' })
}





