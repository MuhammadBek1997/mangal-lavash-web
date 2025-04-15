const { MongoClient } = require('mongodb');
require("dotenv").config({ path: "./config.env" });

// MongoDB URI
const Db = process.env.ATLAS_URI;

// MongoClient yaratish
const client = new MongoClient(Db);

// Asinxron funksiya yaratish
async function main() {
    try {
        // MongoDB-ga ulanish
        await client.connect();

        // 'movies' kolleksiyasiga ulanish
        const db = client.db("sample_mflix");
        const moviesCollection = db.collection("movies");

        // CRUD amallari bilan ishlash
        console.log("Connected to MongoDB");

        // 1. GET: Barcha filmlar
        const movies = await moviesCollection.find().toArray();
        console.log("Movies:", movies);

        // 2. POST: Yangi film qo'shish
        const newMovie = {
            title: "New Movie",
            description: "A new exciting movie!",
            releaseYear: 2025,
        };
        const result = await moviesCollection.insertOne(newMovie);
        console.log("Inserted movie:", result.ops[0]);

        // 3. PUT: Filmni yangilash
        const updatedMovie = {
            title: "Updated Movie",
            description: "Updated description.",
        };
        const updateResult = await moviesCollection.updateOne(
            { _id: result.insertedId }, // Yangi qo'shilgan filmdan IDni olish
            { $set: updatedMovie }
        );
        console.log("Updated movie:", updateResult);

        // 4. DELETE: Filmni o'chirish
        const deleteResult = await moviesCollection.deleteOne({
            _id: result.insertedId, // Yangi qo'shilgan filmni o'chirish
        });
        console.log("Deleted movie:", deleteResult);

    } catch (e) {
        console.error("MongoDB connection error:", e);
    } finally {
        // Serverni yopish
        await client.close();
    }
}

// Asosiy funksiyani chaqirish
main();
