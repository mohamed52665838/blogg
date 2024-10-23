const Commentaire=require("../model/commentaire.model")

const createCommentaire= async(req,res)=>{
    const {contenu,userId,postId}=req.body;
    console.log(contenu)
    
  
    try{
        if(!contenu){
            return res.status(400).json({error:"champ vide"})
        }
       
        const newCommentaire=new Commentaire({
            contenu,
            userId,
            postId
        });
        const commentaire=await newCommentaire.save();
        res.status(201).json(commentaire);
    }
    catch(err){

res.status(500).json(err)
    }
}

const getCommentaireById = async (req, res) => {
    const id = req.params.id;
    try {
      const commentaireExist = await Commentaire.findOne({ _id: id });
      if (!commentaireExist) {
        return res.status(404).json({ error: "commentaire n'existe pas" });
      }
      const commentaire = await Commentaire.findOne({ _id: id }).populate({

        path:"userId",
        select:"email"
        
      }).populate({
        path:"postId",
        select:"_id"
      });
      res.status(200).json(commentaire);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  const getAllComments = async (req, res) => {
    try {
      const commentaire = await Commentaire.find().populate({

        path:"userId",
        select:"email"


      })
      res.status(200).json(commentaire);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  

  const updateCommentaire = async (req, res) => {
    const id = req.params.id;
    const {contenu} = req.body;
    try {
      const commentaireExsiste = await Commentaire.findOne({ _id: id });
      if (!commentaireExsiste) {
        return res.status(404).json({ error: "commentaire n'existe pas" });
      }
  
      const updateContenu = await Commentaire.findByIdAndUpdate(
        id,
        { contenu },
        { new: true }
      );
  
      res.status(200).json(updateContenu);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  const deleteCommentaire = async (req, res) => {
    const id = req.params.id;
    try {
      const posCommentaire = await Commentaire.findOne({ _id: id });
      if (!posCommentaire) {
        return res.status(404).json({ error: "commentaire n'existe pas" });
      }
      await Commentaire.deleteOne({ _id: id });
      res.status(200).json({ message: "commentaire supprimé avec succès" });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  // Function to delete all users
  const deleteAllComments = async (req, res) => {
   console.log("here")
    try {
      const result = await Commentaire.deleteMany(); // This deletes all users in the collection
      res.status(200).json({
        message: "Tous les commentaires ont été supprimés",
        deletedCount: result.deletedCount,
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  };

module.exports={createCommentaire,getCommentaireById,getAllComments,updateCommentaire,deleteAllComments,deleteCommentaire}