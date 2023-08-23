const express = require('express');
const pets = require('./data.js');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => { 
    res.sendFile(_dirname + '/public/index.html')

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/v1/pets', (req, res) => {
    // const { pets } = req.query;
    // res.send(`Returns all pets: ${pets}`)
    res.send(pets);
})

app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    const filterPetName = pets.filter((pet) => pet.name.toLowerCase() === name.toLowerCase())
    console.log(filterPetName);

    res.send(filterPetName);
    // res.send(`Returns all pets by name: ${pets}, ${name}`)
})

app.get('/api/v1/pets/:owner', (req, res) => {
    const owner = req.query.owner;
    const filterOwner = pets.filter((pet) => pet.owner === owner);

    res.send(filterOwner);
    // res.send(`Returns all pets by owner: ${pets}, ${owner}`)
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})

module.exports = app;