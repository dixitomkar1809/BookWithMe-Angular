/**
 * Author: Omkar Dixit
 * Github: github.com/dixitomkar1809
 * Email: omedxt@gmail.com
 */

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/keys');
const Rental = require('./models/rentals');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals')

mongoose.connect( config.db_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seeDb();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001

app.listen(PORT, function() {
    console.log('I am Running')
});

app.get('/rentals', function(req, res) {
    res.json({
        'success': true
    });
});