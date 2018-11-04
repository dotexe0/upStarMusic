// Only make a schema since it is a subdoc of artist
const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlbumSchema = new Schema({
  title: { type: String },
  date: { type: Date },
  copiesSold: { type: Number },
  numberTracks: { type: Array },
  image: { type: String },
  revenue: { type: Number }
});

module.exports = AlbumSchema;
