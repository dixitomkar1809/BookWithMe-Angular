const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: {type: String, require: true, max: [128, 'Too long, max is 128 chars']},
    city: {type: String, required: true, lowercase: true},
    street: {type: String, required: true, min: [4, 'Too short, min is 4 chars']},
    category: {type: String, required: true, lowercase: true},
    image: {type: String, required: true},
    bedrooms: Number,
    shared: Boolean,
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    dailyRate: {type: Number, required: true}
})

module.exports = mongoose.model('Rental', rentalSchema);