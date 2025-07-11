import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/course.js'
import userAssessmentRoutes from './routes/userAssessment.js'

dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/assessment', userAssessmentRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
}); 