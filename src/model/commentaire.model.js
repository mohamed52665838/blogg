const mongoose=require("mongoose")

const commentairesSchema =new mongoose.Schema(
    {
        contenu:{

            type:String,
        }
       
    }
)
module.exports=mongoose.model('Commentaire',commentairesSchema)