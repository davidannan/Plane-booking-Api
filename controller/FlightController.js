const {Flight} = require("../model/Flight");
const uuid = require("uuid").v4

exports.getFlights = async (req, res) => {
    try{
        const flights = Flight;
        res.status(200).json({
            message: "All Flights",
            flight: flights,
        });
            
    } catch (err) {
        res.status(500).json({message: err});

    }

};

exports.getFlight = async (req, res) =>{
    try {
        let id = req.params.id;
        const flight = Flight.find((flight) => flight.id === id)
        res.status(200).json({
            message: "Flight found",
            flight,
        });
    }catch (error){

    }
}
exports.createFlight = async (req, res) => {
    try {
        const flight = await req.body;

        flight.id =uuid();
        
        Flight.push(flight);

        res.status(201).json({
            message: "Flight Booked",
            flight,
        });
    }catch (err){
        res.status(500).json({ message: err.message})
    }
}

exports.updateFlight = async(req, res) => {
    try {
        let id = req.params.id;
        const flight = Flight.find((flight) => flight.id === id);
        const {title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json ({
            message: "Flight updated",
            flight,
        })
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

exports.deleteFlight = async (req, res) => {
    try{
        let id =req.params.id;
        const flight = Flight.find((flight) => flight.id === id);
        Flight.splice(Flight.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight deleted",
            flight,
        })
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};