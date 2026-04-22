require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("Vnclick server running");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server running");
});
