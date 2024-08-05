const express = require("express");

const crypto = require("crypto")

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/login/submit").post(function (req, response) {
  let db_connect = dbo.getDb()
  const hashValue = val =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(crypto.createHash('sha256').update(val).digest('hex')),
      0
    )
  );

  async function submit() {
    let pass = await hashValue(req.body.password);
    let details = {
      email: req.body.email,
      password: pass
    }
    console.log(details);
    let found = await db_connect.collection("accounts").findOne(details, function (err, res) {
        if (err) throw err;
    })

    console.log("Found:" + found);

    if (found) {
      console.log("Found!")
      response.json({id: found._id})
    } else {
      response.json({id: "Error"})
      console.log("Not found!")
    }
    
  }

  submit();

});

  // This section will help you create a new account.
recordRoutes.route("/accounts/add").post(function (req, response) {
 let db_connect = dbo.getDb();

  const hashValue = val =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(crypto.createHash('sha256').update(val).digest('hex')),
      0
    )
  );

  async function submit() {
    let pass = await hashValue(req.body.password);
    let details = {
      email: req.body.email,
      password: pass,
      name: req.body.name
    }
      console.log(details);
      db_connect.collection("accounts").insertOne(details, function (err, res) {
        if (err) throw err;
        response.json(res);
    })
  }

  submit();
});
 
module.exports = recordRoutes;