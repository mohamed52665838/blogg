const Categorie=require("../model/categorie.model")

const createCategorie= async(req,res)=>{
    const {nom}=req.body;
    console.log(nom)
    const data=req.body;
    console.log(data.nom)
  
    try{
        if(!nom){
            return res.status(400).json({error:"champ vide"})
        }
       
        const newCategorie=new Categorie({
            nom,
        });
        const categorie=await newCategorie.save();
        res.status(201).json(categorie);
    }
    catch(err){

res.status(500).json(err)
    }
}
module.exports=createCategorie