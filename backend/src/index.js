import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import roomsRouter from './routes/rooms.js';
import bookingsRouter from './routes/bookings.js';
import menuRouter from './routes/menu.js';
import contactRouter from './routes/contact.js';
import adminRouter from './routes/admin.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/menu', menuRouter);
app.use('/api/contact', contactRouter);
app.use('/api/admin', adminRouter);

app.get('/health', (req, res) => {

    res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
