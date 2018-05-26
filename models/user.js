var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  fullname: {type: String,required:true},
  email:{type: String,required:true},
  password:{type:String},
  role:{type:String,default: ''},
  company:{
    name:{type:String , default:' '},
    image:{type:String , default:' '},
  },
  passwordResetToken:{type: String, default:' '},
  passwordResetExpires:{type: Date, default: Date.now}
});

userSchema.methods.encryptpassword = (password) => {
  return bcrypt.hashSync(password,bcrypt.genS )
}

module.exports = mongoose.model('User',userSchema);
