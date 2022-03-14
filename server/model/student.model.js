const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    id: { type: String, required: true },
    studentName: { type: String, required: true, max: 100 },
    age: { type: Number, required: true },
    courses: { type: Array, required: true }
});

// Export the model
module.exports = mongoose.model('Student', StudentSchema);