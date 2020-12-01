const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String,
    lastname: String,
    password: String,
    googleID:String,
    image:{
      type:String,
      default:'./images/ProfilePic.png'
    },
    followers:[{
      type: Schema.Types.ObjectId,
      ref:'User'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);


//Local strategy handled by plugin, no customized options for now
userSchema.plugin(PLM, { usernameField: 'email'});

module.exports = model('User', userSchema);

