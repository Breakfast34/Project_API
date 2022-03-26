const express = require("express");
const {
  addAccount,
  getAllAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/sportController");

const router = express.Router();

router.post("/sport", addAccount);
router.get("/sport", getAllAccount);
router.get("/sport/:id", getAccount);
router.put("/sport/:id", updateAccount);
router.delete("/sport/:id", deleteAccount);

module.exports = {
  routes: router,
};
