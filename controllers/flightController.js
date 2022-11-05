let flights = require("../models/Flight");
const { v4: uuidv4 } = require('uuid');

exports.all_flights = (req, res) =>{
    res.send(flights);
}

exports.single_flight = (req, res) =>{
    const id = req.params.id;
    const singleFlight = flights.find((flight) => flight.id == id);

    res.send(singleFlight);
}

exports.add_flight = (req, res) =>{
    let flight = req.body;
    let Id = uuidv4();
    const flightId = {...flight, id:Id};


    flights.push(flightId);

    res.send(`Added ${flight.title}, ${flight.time}, ${flight.price}, ${flight.date}`);
}

exports.edit_flight = (req, res) =>{
    const id = req.params.id;
    const {title, time, price, date} = req.body;

    const flight = flights.find((flight) => flight.id == id);

    if (title) flight.title = title;
    if (title) flight.time = time;
    if (title) flight.price = price;
    if (title) flight.date = date;

    res.send(`Flight with id : ${id} has been updated`)
}

exports.delete_flight =  (req, res) =>{
    const id = req.params.id;
    flights = flights.filter((flight) => flight.id != id);

    res.send(`Flight with id: ${id} has been deleted`);
}


