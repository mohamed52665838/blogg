const mongoose=require("mongoose")

const commentairesSchema =new mongoose.Schema(
    {
        contenu:{

            type:String,
        },


        'userC':{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
       
    }
)
module.exports=mongoose.model('Commentaire',commentairesSchema)