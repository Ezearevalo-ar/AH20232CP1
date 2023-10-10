import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb+srv://alumnos:alumnos@dwt4ah.kh7oihe.mongodb.net/');

client.connect()
      .then( async() => {
            console.log("Successfully connected to the database ✅");
            const db = client.db("AH20232CP1");
            const data = await db.collection("projects").find().toArray();
            console.log(data);
        }  
      )
      .catch( () => console.log("Could not connect to database ❌"));