import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const router = express.Router();
const prisma = new PrismaClient();

// POST a new contact message
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newMessage = await prisma.contactMessage.create({
            data: { name, email, message },
        });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

export default router;
