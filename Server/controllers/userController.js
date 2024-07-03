const userModel = require('../models/userModel');

exports.createAccount = async (req, res) => {
  const { userName, phoneNumber, email } = req.body;

  try {
    const user = await userModel.createUser(userName, phoneNumber, email);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const user = await userModel.getUserByPhoneNumber(phoneNumber);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  const { userName, phoneNumber, email, address } = req.body;

  try {
    const user = await userModel.updateUser(userName, phoneNumber, email, address);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
