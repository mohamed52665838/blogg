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
const commentaireRouter=require("./routes/commentaire.route.js")
const categorieRoute = require("./routes/categorie.route.js");


app.use("/user", userRouter);

app.use("/post", postRouter);//chneselk yani b hedi nhot /post/create
app.use("/commentaire",commentaireRouter)

app.use("/categorie",categorieRoute)


const port = 4000;
app.listen(port, () => {
  console.log("server connected on localhost:" + port);
});
