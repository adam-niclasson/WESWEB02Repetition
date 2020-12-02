const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: String
});

const Person = mongoose.model('Person', personSchema);

exports.savePerson = (person) => {
    let blyat = new Person({
        name: person
    })

    blyat.save();
}
