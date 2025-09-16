// Entry point for the application

import express from 'express';
import { authRoutes } from './routes/auth';
import { tenantRoutes } from './routes/tenant';
import { userRoutes } from './routes/user';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tenant', tenantRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});