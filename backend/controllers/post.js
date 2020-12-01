const Post = require('../models/Post');
const User = require('../models/User');


// crud for posting,requires postId... 
// exports.getPost = async (req, res) => {
//     const { user: { id } } = req
//     const { posts } = await User.findById(id).populate('posts')
//     res.status(200).json(posts)
// }

// View
exports.getPostDetail = async (req, res) => {
    const { postId } = req.params
    const post = away  Post.findById(postId)

    res.status(200).json(post)
}

// create
exports.creatPost = async (req, res) => {
    const { title, comment, image } = req.body
    const { user: { id } } = req

    const newPost = await Post.create({
        title, comment, image
    })
    await User.findByIdAndUpdate(id, { $push { posts: newPost._id }})
res.status(201). json(newPost)
}

// update
exports.updatePost = async (req, res) => {
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
    await Post.findByIdAndDelete(postId)
    res.status(200).json({ message: 'post deleted' })
}





