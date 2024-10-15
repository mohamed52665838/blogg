const Post=require("../model/post.model")

const createPost= async(req,res)=>{
    const {title,description}=req.body;
    try{
        if(!title){
            return res.status(400).json({error:"champ vide"})
        }
       
        const newPost=new Post({
            title,
            description,
        });
        const post=await newPost.save();
        res.status(201).json(post);
    }
    catch(err){
        console.log(err)

res.status(500).json(err)
    }
}


const updatePost = async (req, res) => {
    const _title = req.params.id;
    const { title, description } = req.body;
    try {
        const postExist = await Post.findOne({ _title });
        console.log("Fetching user with ID:", _title); // Debugging line
        if (!postExist) {
            return res.status(404).json({ error: "post n'existe pas" });
        }
        // Update fields if provided in the request
        if (title) userExist.title = title;
        if (description) userExist.description = description;

        const updatedPost = await postExist.save();
        res.status(200).json(updatePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};


const deletePost = async (req, res) => {
    const _title = req.params.id;
    try {
        const postExist = await User.findOne({ _title });
        if (!postExist) {
            return res.status(404).json({ error: "user n'existe pas" });
        }
        await Post.deleteOne({ _title });
        res.status(200).json({ message: "user supprimé avec succès" });
    } catch (err) {
        res.status(500).json(err);
    }
};


// Function to delete all users
const deleteAllPosts = async (req, res) => {
    try {
        const result = await Post.deleteMany(); // This deletes all users in the collection
        res.status(200).json({ message: "Tous les utilisateurs ont été supprimés", deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json(err);
    }
};


module.exports={createPost , updatePost,deleteAllPosts,deletePost}