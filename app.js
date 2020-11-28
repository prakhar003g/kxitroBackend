const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('./models/recharge');
require('./models/category')
require('./models/user')
const Recharge = mongoose.model('recharge');
const Category = mongoose.model('category');
const User = mongoose.model('user');
var url="mongodb+srv://prakhar:prakhar@123@cluster0.ff2qh.mongodb.net/prakhar?retryWrites=true&w=majority"
// var url = "mongodb://localhost:27017/demokixto";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  console.log("Connect Datebase");
}, function (err) {
  console.log(err)
}
)
app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/addcategory", async function (req, res) {
  let addCategory = await new Category(req.body).save();
  if (addCategory) {
    res.send({ status: 200, data: addCategory })
  }
  else {
    res.send({ status: 400 })
  }

})

app.get("/allcategory", async function (req, res) {
  let getData = await Category.find({});
  res.send({status:200, data:getData})
})

app.post("/updateRecharge", async function (req, res) {
  let updatedata = await Recharge.findByIdAndUpdate({ _id: req.body.id }, {
    $set: {
      status: req.body.status,
      paid_date: req.body.data
    },

    multi: true

  })
  if(updatedata){
    res.send({ status: 200, data: updatedata })
  }
  else {
    res.send({ status: 400 })
  }
})


app.post("/deletecategory", async function (req, res) {
  let updatedata = await Category.findOneAndRemove({ _id: req.body.id })
  if(updatedata){
    res.send({ status: 200, data: updatedata })
  }
  else {
    res.send({ status: 400 })
  }
})