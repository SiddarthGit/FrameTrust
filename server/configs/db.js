import mongoose from "mongoose";
import dns from "dns";

// 🔑 FORCE IPV4 (THIS FIXES IT)
dns.setDefaultResultOrder("ipv4first");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      family: 4, // 👈 CRITICAL
    });
    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB error:", error.message);
    process.exit(1);
  }
};

export default connectDB;