var mongoose = require('mongoose');

var PersonalModel = mongoose.Schema({
    nombre : String,
    cv : String,
    contratos : String
});

module.exports = mongoose.model("personal", PersonalModel);

