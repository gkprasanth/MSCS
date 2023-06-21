const mongoose = require('mongoose');

// Define the data schema
const dataSchema = new mongoose.Schema({
  sr_no: { type: Number, required: true },
  name_of_society: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String},
  date_of_registration: { type: Date },
  area_of_operation: { type: String },
  sector_type: { type: String }
});

// Create a data model based on the schema
const Data = mongoose.model('Data', dataSchema);

module.exports.mscs = Data;
