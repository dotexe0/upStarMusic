const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  return Artist.find({}).sort({ age: 1 }).then(artist => ({
    min: artist[0].age,
    max: artist[artist.length - 1].age
  }));
};
