// server.cjs
const express = require('express');
const { MongoClient } = require('mongodb');
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// MongoDB ulanish
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);

// MongoDB-ga ulanish va kolleksiya
let moviesCollection;

// MongoDB ulanishi
async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB connected");

        const db = client.db("sample_mflix");
        moviesCollection = db.collection("movies");
    } catch (e) {
        console.error("MongoDB connection error:", e);
        process.exit(1);
    }
}

connectDB(); // server ishga tushganida MongoDB bilan ulanish

// GET request for getting all movies
app.get('/movies', async (req, res) => {
    try {
        const movies = await moviesCollection.find().toArray();
        res.json(movies);
    } catch (e) {
        res.status(500).json({ message: "Error fetching movies" });
    }
});

// POST request for adding a new movie
app.post('/movies', async (req, res) => {
    try {
        const newMovie = req.body;
        const result = await moviesCollection.insertOne(newMovie);
        res.status(201).json(result.ops[0]); // result.ops[0] - yangi qo'shilgan film
    } catch (e) {
        res.status(500).json({ message: "Error adding movie" });
    }
});

// PUT request for updating an existing movie
app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const updatedMovie = req.body;

    try {
        const result = await moviesCollection.updateOne(
            { _id: new MongoClient.ObjectId(id) }, // IDni MongoDB-ning ObjectId formatiga o'zgartiramiz
            { $set: updatedMovie }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const movie = await moviesCollection.findOne({ _id: new MongoClient.ObjectId(id) });
        res.json(movie);
    } catch (e) {
        res.status(500).json({ message: "Error updating movie" });
    }
});

// DELETE request for deleting a movie
app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await moviesCollection.deleteOne({ _id: new MongoClient.ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(204).send(); // Film muvaffaqiyatli o'chirildi
    } catch (e) {
        res.status(500).json({ message: "Error deleting movie" });
    }
});

// Server listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
