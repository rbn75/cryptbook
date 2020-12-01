
//Middleware for catching errors
exports.catchErrs=ctl=>(req,res,next)=>ctl(req,res).catch(next)


//Middleware for athorization for routes
exports.isAuth=(req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    } else (
        res.statys(403).json({
            message:"You need to be logged in to acces this page"
        })
    )
}