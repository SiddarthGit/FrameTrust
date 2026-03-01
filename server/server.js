import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

dotenv.config();

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
