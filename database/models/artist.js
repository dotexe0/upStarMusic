// Todo: Create Artist Model
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtistSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  yearsActive: { type: Number },
  image: { type: String },
  genre: { type: String },
  website: { type: String },
  netWorth: { type: Number },
  labelName: { type: String },
  retired: { type: Boolean },
  albumns: [{ type: mongoose.Types.ObjectId, ref: 'albumn' }]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
