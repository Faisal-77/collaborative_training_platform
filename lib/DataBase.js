import mongoose from 'mongoose';

const DB_URL = process.env.DATABASE_URL;

export const dis_connact_database = () =>{
  mongoose.disconnect();
  console.log('disconnect to database');
}

export const connectToDatabase = async () => {

    try {

        await mongoose.connect(DB_URL, {
            serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
          });
        
        console.log('Database connected');

    } catch (error) { 
        console.error('Database connection error:', error);
  }
};