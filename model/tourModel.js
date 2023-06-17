const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: [true, 'Field ini harus diisi!'],
    minLength: [4, 'Nama harus diisi minimal 4 karakter!']
  },
  title: {
    type: String,
    required: [true, 'Field ini harus diisi!'],
    minLength: [4, 'Title ini harus disini minimal 4 karakter'],
  },
  description: {
    type: String,
    required: [true, 'Field ini harus'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
