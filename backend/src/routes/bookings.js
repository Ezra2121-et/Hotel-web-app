import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

// POST a new booking
router.post('/', async (req, res) => {
    const { roomId, guestName, email, phone, checkIn, checkOut } = req.body;
    try {
        // Check if room exists
        const room = await prisma.room.findUnique({
            where: { id: parseInt(roomId) }
        });

        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        const booking = await prisma.booking.create({
            data: {
                roomId: parseInt(roomId),
                guestName,
                email,
                phone,
                checkIn: new Date(checkIn),
                checkOut: new Date(checkOut),
            },
        });
        res.status(201).json(booking);
    } catch (error) {
        console.error('Booking Error:', error);
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
