const express = require('express');
const app = express();
const port = 5000;
const routerMahasiswa = require('./routers/mahasiswa')

//untuk menerima req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routerMahasiswa)

const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(/* process.env.DATABASE_URL */"mongodb+srv://hadiqfawzie:24ZH30o5eZTVTNbX@cluster0.7dt5grk.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Sukses Terkoneksi dengan mongodb");
});


app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})

