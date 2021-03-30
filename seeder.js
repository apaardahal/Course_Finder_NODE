const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config/config' });

//Load Models
const Bootcamp = require('./models/Bootcamp');


// Connect to DB
mongoose.connect(encodeURI(process.env.MONGO_URI), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//read json files
const bootcamps = JSON.parse(fs.readFileSync(`${dirname}/_data/bootcamps.json`, 'utf-8'));

// Import into DB
const importData = async() => {
    try {

        await Bootcamp.create(bootcamps);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(err);
    }
}

// Delete into DB
const deleteData = async() => {
    try {

        await Bootcamp.deleteMany();

        console.log('Data deleted...'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(err);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}