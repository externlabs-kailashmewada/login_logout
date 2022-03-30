const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  cityName: { type: String, default: null },
  
  stateName: { type: String }

  
});

module.exports = mongoose.model("city", citySchema);