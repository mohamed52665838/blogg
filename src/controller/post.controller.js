const Post = require("../model/post.model");

const createPost = async (req, res) => {
  const { title, description,author } = req.body;
  try {
    if (!title) {
      return res.status(400).json({ error: "champ vide" });
    }

    const newPost = new Post({
      title,
      description,
      author
    });
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
};

const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const postExist = await Post.findOne({ _id: id });
    if (!postExist) {
      return res.status(404).json({ error: "post n'existe pas" });
    }
    const post = await Post.findOne({ _id: id }).populate({
        path:"author",
        select:"email"
    })
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate({
        path:"author",
        select:"email"
    });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  try {
    const postExist = await Post.findOne({ _id: id });
    if (!postExist) {
      return res.status(404).json({ error: "post n'existe pas" });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const postExist = await User.findOne({ _id: id });
    if (!postExist) {
      return res.status(404).json({ error: "user n'existe pas" });
    }
    await Post.deleteOne({ _id: id });
    res.status(200).json({ message: "user supprimé avec succès" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Function to delete all users
const deleteAllPosts = async (req, res) => {
  try {
    const result = await Post.deleteMany(); // This deletes all users in the collection
    res.status(200).json({
      message: "Tous les utilisateurs ont été supprimés",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPost,
  updatePost,
  deleteAllPosts,
  deletePost,
  getAllPosts,
  getPostById
};
