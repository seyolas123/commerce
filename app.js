const express = require('express');
const mongoose = require('mongoose');

const database = require('./config/db.config');

mongoose.connect(database.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => {
    console.log(error);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// app.get('/', (req,res) => {
//     res.send('hello people');
// });

require('./routes/order.route')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));


