const express = require("express");
// const burger = require("burger.js");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    
    let burgerObject = {
      burgers: data
    };
    res.render("index", burgerObject);
  });    

});

//send submit ajax request. 
router.post("/api/burgers", function(req, res) {
 
  burger.insertOne
   (req.body.burger_name, req.body.devoured, 
  function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = req.params.id;
  
  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", function(req, res) {
  const id = req.params.id;

  burger.delete( id, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;


