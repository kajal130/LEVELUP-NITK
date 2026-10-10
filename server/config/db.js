import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/levelup_nitk';
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 2500
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB Notice] Live database connection skipped/failed (${error.message}). Running server with resilient mock fallback memory layer.`);
    return false;
  }
};
