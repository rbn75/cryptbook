const {Schema, model} =require ('mongoose')

const postSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    title:String,
    comment:String,
    image:String,status: {
    type: String,
    status: {
        type: String,
        enum: ['POSTES']
      }
    
  }


    
},{
    timestamps:true
});

module.exports=model ('Post', postSchema)