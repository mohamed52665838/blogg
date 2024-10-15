const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mohameddhaouedi:mohamed@cluster0.dsb09.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongodb connecteds");
  })
  .catch((err) => {
    console.log("not", err);
  });

const userRouter = require("./routes/user.route.js");
const postRouter = require("./routes/post.route.js");
const createCategorie = require("./controller/categorie.controller.js");
const createCommentaire = require("./controller/commentaire.controller.js");


app.use("/user", userRouter);

app.use("/post", postRouter);



app.post("/categorie/create", createCategorie); //path heka ta chnwa ! o ta3mir fi postman
app.post("/commentaire/create", createCommentaire); //path heka ta chnwa ! o ta3mir fi postman

const port = 4000;
app.listen(port, () => {
  console.log("server connected on localhost:" + port);
});
