import { MongoClient } from "mongodb";
import dotenv from "dotenv"

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;

try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

let db = conn.db("hos08");

export default db;