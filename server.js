const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose');
const config = require("./config/index")
const ratesRoutes = require("./routes/ratesRoutes")
const storeRoutes = require("./routes/storeRoutes")
const itemRoutes = require("./routes/itemRoutes")



const PORT = config.port
const options = {
    dbName: "Contractors",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


/* =======================
Middleware
=========================*/
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(cors())


app.use("/", itemRoutes)
app.use("/", storeRoutes)
app.use("/", ratesRoutes)


/* =======================
Mongoose
=========================*/
mongoose.connect(config.dbUri, options)
    .then(app.listen(PORT, () => {
        console.log("\nConnected to DB!\n")
        console.log("\nServer running on port:", PORT, "\n")
    }))
    .catch((err) => console.error(err))

mongoose.set("useFindAndModify", false);