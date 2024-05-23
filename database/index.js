const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://naji:naji1410@cluster0.2mlqv2t.mongodb.net/twitter")
  .then(() => console.log("connexion db ok !"))
  .catch((err) => console.log(err));
