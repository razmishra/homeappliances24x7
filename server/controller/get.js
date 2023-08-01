const express = require("express");

const get = (req, res) => {
  return res.json({
    message: "This is a testing route",
    status: 200,
  });
};

module.exports = get;
