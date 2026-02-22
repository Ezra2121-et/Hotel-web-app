import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await prisma.room.findMany();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch rooms' });
    }
});

// GET room by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const room = await prisma.room.findUnique({
            where: { id: parseInt(id) },
        });
        if (!room) return res.status(404).json({ error: 'Room not found' });
        res.json(room);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch room' });
    }
});

export default router;
