const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.post("/postman");
// router.post("/", createPerson);
// router.get("/", getPeople);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);

router.route("/:id").delete(deletePerson).put(updatePerson);

module.exports = router;
