import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://admin:admin123@cluster0.wbogz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
