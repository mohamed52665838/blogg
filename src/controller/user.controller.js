
const User=require("../model/user.model")

const createUser= async(req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email){
            return res.status(400).json({error:"champ vide"})
        }
        const userExsit = await User.findOne({email})
        if(userExsit ){
            return res.status(400).json({error:"user exist"})

        }
        const newUser=new User({
            email,
            password,
        });
        const user=await newUser.save();
        res.status(201).json(user);
    }
    catch(err){
        console.log(err)

res.status(500).json(err)
    }
}

const getAll= async (req, res) => {


    try {
        const user = await User.find();
        res.status(200).json(user);


    }
    catch (err) {
        res.status(500).json(err)
    }
}
const getId= async (req, res) => {//:id/:mat/:age chnouma
    const _id = req.params.id
    try {
        const userExist = await User.findOne({ _id })
        if (!userExist) {
            return res.status(404).json({ error: "user n'existe pas" })
        }

        const user = await User.findOne({ _id })
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
}
const updateUser = async (req, res) => {
    const _id = req.params.id;
    const { email, password } = req.body;
    try {
        const userExist = await User.findOne({ _id });
        console.log("Fetching user with ID:", _id); // Debugging line
        if (!userExist) {
            return res.status(404).json({ error: "user n'existe pas" });
        }
        // Update fields if provided in the request
        if (email) userExist.email = email;
        if (password) userExist.password = password;

        const updatedUser = await userExist.save();
        res.status(200).json(updatedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
const deleteUser = async (req, res) => {
    const _id = req.params.id;
    try {
        const userExist = await User.findOne({ _id });
        if (!userExist) {
            return res.status(404).json({ error: "user n'existe pas" });
        }
        await User.deleteOne({ _id });
        res.status(200).json({ message: "user supprimé avec succès" });
    } catch (err) {
        res.status(500).json(err);
    }
};


// Function to delete all users
const deleteAllUsers = async (req, res) => {
    try {
        const result = await User.deleteMany(); // This deletes all users in the collection
        res.status(200).json({ message: "Tous les utilisateurs ont été supprimés", deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createUser, getAll, getId, updateUser ,deleteUser,deleteAllUsers };