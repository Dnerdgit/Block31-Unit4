const express = require('express');
const pets = require('/data.js');

const app = express();

app.get('/', (req, res) => { 
    const { homepage } = req.query;
    res.send(`Returns homepage: ${homepage}`)

});

app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    const filterPetName = data.filter((pet) => pet.name === name)
    console.log(filterPetName);

    res.send(filterPetName);
    // res.send(`Returns all pets by name: ${pets}, ${name}`)
})

app.get('/api/v1/pets/:owner', (req, res) => {
    const owner = req.params.owner;
    const filterOwner = data.filter((pet) => pet.owner === owner);

    res.send(filterOwner);
    // res.send(`Returns all pets by owner: ${pets}, ${owner}`)
})

app.get('/api/v1/pets', (req, res) => {
    // const { pets } = req.query;
    // res.send(`Returns all pets: ${pets}`)
    res.send(pets);
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})