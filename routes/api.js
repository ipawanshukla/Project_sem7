const express = require("express");

const router = express.Router();

const BlogPost = require("../models/blogPost");

const customers = require("../models/customerSchema");
// const Customers = require("../models/Customer");
const app = express();

const AWS = require("aws-sdk");

router.get("/all", (req, res) => {
  customers
    .find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/insert", (req, res) => {
  const data = req.body;
  console.log("Inside save.");
  var update;
  customers
    .findOneAndUpdate({ email: data.email }, data.camera, { new: true })
    .then((d) => {
      res.json(d);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Our default route
// Routes
router.get("/", (req, res) => {
  customers
    .find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/getDistanceRes", (req, res) => {
  
});

router.post("/find", (req, res) => {
  // console.log('data body received',req.body);

  console.log("in find");
  console.log(req.body);

  BlogPost.find({ Count: req.body.Count })
    .then((data) => {
      console.log("Data: ", data);
      return res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/login", (req, res) => {
  const data = req.body;
  console.log("Login Payload", data);
  const op = customers
    .findOne(data)
    .then((d) => {
      console.log("Received Data", typeof d);
      res.json(d);
    })
    .catch((err) => {
      console.log(err);
    });

  return res.status(200);
});

router.post("/s3", (req, res) => {
  AWS.config.update({
    accessKeyId: "AKIAZZQRCS5X6UZRUAUR",
    secretAccessKey: "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",
  });

  let s3 = new AWS.S3();
  console.log("Inside S3");
  console.log(req.body.image_name);
  async function getImage() {
    const data = s3
      .getObject({
        Bucket: "social-distancing-bucket",
        Key: req.body.image_name,
      })
      .promise();
    return data;
  }
  getImage()
    .then((img) => {
      return res.json(encode(img.Body));
    })
    .catch((e) => {
      console.log("S3 data transfer failed!");
    });
  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString("base64");
    return base64;
  }
});

module.exports = router;
