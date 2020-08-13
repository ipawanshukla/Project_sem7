const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  _id: {
    $oid: {
      type: "ObjectId",
    },
  },
  ID: {
    type: "String",
  },
  userDetails: {
    email: {
      type: "String",
    },
    mobile: {
      $numberLong: {
        type: "Number",
      },
    },
    password: {
      type: "String",
    },
    username: {
      type: "String",
    },
  },
  camera: {},
});

// Model
const customers = mongoose.model("customers", customerSchema);

module.exports = customers;
