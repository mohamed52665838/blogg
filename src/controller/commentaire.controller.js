const Commentaire=require("../model/commentaire.model")

const createCommentaire= async(req,res)=>{
    const {contenu}=req.body;
    console.log(contenu)
    
  
    try{
        if(!contenu){
            return res.status(400).json({error:"champ vide"})
        }
       
        const newCommentaire=new Commentaire({
            contenu,
        });
        const commentaire=await newCommentaire.save();
        res.status(201).json(commentaire);
    }
    catch(err){

res.status(500).json(err)
    }
}
module.exports=createCommentaire