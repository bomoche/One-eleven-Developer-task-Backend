const express = require("express");
const { sortCharacters } = require("../services/sortService");

const router = express.Router();

router.post("/", (req, res) => {
  try {

    if (!req.body) {
      return res.status(400).json({
        message: "Request body is missing. Please provide data to sort."
      });
    }

    const { data } = req.body;

    if (data === undefined) {
      return res.status(400).json({
        message: "The 'data' field is required."
      });
    }

    if (data === null) {
      return res.status(400).json({
        message: "The 'data' field cannot be null."
      });
    }

    if (typeof data !== "string") {
      return res.status(400).json({
        message: "The 'data' field must be a string."
      });
    }

    const sortedCharacters = sortCharacters(data);

    return res.status(200).json({
      word: sortedCharacters
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Something went wrong while processing your request. Please try again."
    });

  }
});

module.exports = router;