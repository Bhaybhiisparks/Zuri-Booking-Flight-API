let flights = require("../models/Flight");
const { v4: uuidv4 } = require('uuid');

exports.all_flights = (req, res) =>{
    res.json(flights);
}

exports.single_flight = (req, res) =>{
    const id = req.params.id;
    const singleFlight = flights.find((flight) => flight.id === id);


    if(!singleFlight){
        res.send("No flights with that ID found. Please check the ID number and try again");
    }else{
        res.json(singleFlight);
    }
}

exports.add_flight = (req, res) =>{
   
    let flight = req.body;
    let Id = uuidv4();
    const flightId = {...flight, id:Id};

    if (typeof title === "string" && typeof time === "string" && typeof price === "number" && typeof date === "string") {
        flights.push(flightId);
    }else{
        res.json({
            "message": "bad request",
            "details" : "invalid input"
        });
    }
    

    res.send(`Added ${flight.title}, ${flight.time}, ${flight.price}, ${flight.date}`);
}

exports.edit_flight = (req, res) =>{
    const id = req.params.id;
    const {title, time, price, date} = req.body;

    const flight = flights.find((flight) => flight.id === id);

    if (title) { flight.title = title; }
    if (time) { flight.time = time; }
    if (price) { flight.price = price; }
    if (date) { flight.date = date; }

    res.send(`Flight with id : ${id} has been updated`)
}

exports.delete_flight =  (req, res) =>{
    const id = req.params.id;
    flights = flights.filter((flight) => flight.id != id);

    res.send(`Flight with id: ${id} has been deleted`);
}


