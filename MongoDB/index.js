const express = require("express"),
  cors = require("cors");
const app = express();
const connect = require("./helper/db");
const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", { name: String });
app.use(cors());
app.use(express.json());
connect();

app.get("/", async (req, res) => {
  res.send("Hello MongoDB!");
});

app.get("/cats", async (req, res) => {
  const data = await Cat.find({});
  res.send(data);
});

app.post("/cats", async (req, res) => {
  const body = req.body;
  const kitty = new Cat(body);
  await kitty.save()
  res.send("Successfully created");
});

app.delete("/cat/:id", async (req, res) => {
  const id = req.params.id;
  await Cat.deleteOne({ _id: id })
  res.send("Deleted");
});

app.put("/cat/:id", async (req, res) => {
  const id = req.params.id;
  const cat = await Cat.findByIdAndUpdate(
    id,
    { name: "nohoin gulug" },
    { new: true }
  );
  console.log(cat);
  res.send(cat);
});

app.listen(8000, () => {
  console.log("listen at: ", 8000);
});
