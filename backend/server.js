import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import bookRoutes from "./routes/books.js";
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from "./routes/categories.js";

// Load environment variables
dotenv.config();

const app = express();
const port =  4000;

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);
const MONGO_URL = "mongodb+srv://garghimanshu778:AwJhUVLcQa0AQC60@cluster0.vqf4n.mongodb.net/";

// MongoDB connection
mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
    console.log("MONGODB CONNECTED");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Default route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
