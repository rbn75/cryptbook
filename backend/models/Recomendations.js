
const {Schema, model} =require ('mongoose')

const recomendationSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    title:String,
    estimate:String,
    Actual:String,
    Surprise:String,
    recommendations:[{buy:String, sell:String, hold: String }],
    
},{
    timestamps:true
});

module.exports=model ('Recomendation', recomendationSchema)