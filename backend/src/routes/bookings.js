import express from 'express';
import { PrismaClient } from '@prisma/client';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

// POST a new booking
router.post('/', async (req, res) => {
    const { roomId, guestName, email, phone, checkIn, checkOut } = req.body;
    try {
        const booking = await prisma.booking.create({
            data: {
                roomId: parseInt(roomId),
                guestName,
                email,
                phone,
                checkIn: new DateTime(checkIn),
                checkOut: new DateTime(checkOut),
            },
        });
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

// GET all bookings (Admin only)
router.get('/admin', authMiddleware, async (req, res) => {
    try {
        const bookings = await prisma.booking.findMany({
            include: { room: true },
        });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

export default router;
