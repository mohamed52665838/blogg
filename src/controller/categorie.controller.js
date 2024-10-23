const Categorie=require("../model/categorie.model")

const createCategorie= async(req,res)=>{
    const nom=req.body;
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






const getCategoriebyid = async (req, res) => {
    const id = req.params.id;
    try {
      const categorieExsiste = await Categorie.findOne({ _id: id });
      if (!categorieExsiste) {
        return res.status(404).json({ error: "categorie n'existe pas" });
      }
      const categorie = await Categorie.findOne({ _id: id });
      res.status(200).json(categorie);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  const getAllCategorie = async (req, res) => {
    try {
      const categorie = await Categorie.find()
      res.status(200).json(categorie);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  

  const updateCategorie = async (req, res) => {
    const id = req.params.id;
    const {nom} = req.body;
    try {
      const categorieExsiste = await Categorie.findOne({ _id: id });
      if (!categorieExsiste) {
        return res.status(404).json({ error: "categorie n'existe pas" });
      }
      
      const updatedCategorie = await Categorie.findByIdAndUpdate(
        id,
        { nom },
        { new: true }
      );
      // rak kont msmi l variable fl const nfsou ism l func
      res.status(200).json(updatedCategorie);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  const deleteCategorie = async (req, res) => {
    const id = req.params.id;
    try {
      const posCategorie = await Categorie.findOne({ _id: id });
      if (!posCategorie) {
        return res.status(404).json({ error: "categorie n'existe pas" });
      }
      await Categorie.deleteOne({ _id: id });
      res.status(200).json({ message: "caetegorie supprimé avec succès" });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  // Function to delete all users
  const deleteAllCategorie = async (req, res) => {
    try {
      const result = await Categorie.deleteMany(); // This deletes all users in the collection
      res.status(200).json({
        message: "Tous les commentaires ont été supprimés",
        deletedCount: result.deletedCount,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports={createCategorie,getCategoriebyid,getAllCategorie,updateCategorie,deleteAllCategorie,deleteCategorie}