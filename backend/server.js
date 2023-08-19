const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-mern-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});