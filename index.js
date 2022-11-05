const express = require("express")

const { json } = require("express")

const flight = require("./router/flightRouter")

const app = express();

app.use(json());

app.use("/flight", flight);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('Book a flight')
})
app.listen(PORT, () =>
    console.log(`Serving on port ${PORT}`))
