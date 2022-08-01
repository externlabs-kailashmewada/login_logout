require("dotenv").config();
require('./config/database').connection();
const express = require("express");
const app= express();

app.use(express.json());

const routes = require("./api/routes.js");
app.use('/api',routes);

app.use("/", routes);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});





app.post('/autocity',async (req, res)=>
 {
   
    try {
        // Get user input
        const { cityName, stateName } = req.body;

        //validate user input
        if (!(cityName && stateName )) {
            res.status(400).send("All input is required");
            
        
        }

        console.log("Kailash Mewada");
        const cities = await city.create({
            cityName,
          
            stateName
            

        });

        cities.save()
        .then(item => {
            res.send("item saved to database");
            })
            .catch(err => {
            res.status(400).send("unable to save to database");
            });

    
        res.status(201).json(cities);
    } catch (err) {
        console.log(err);
    }

});




