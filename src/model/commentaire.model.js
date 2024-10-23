const mongoose=require("mongoose")

const commentairesSchema =new mongoose.Schema(
    {
        contenu:{

            type:String,
        },


        'userId':{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },

        'postId':{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
            required:true
        }
        
       
    }
)
module.exports=mongoose.model('Commentaire',commentairesSchema)