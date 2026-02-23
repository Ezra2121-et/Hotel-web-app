import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const router = express.Router();
const prisma = new PrismaClient();

// GET all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await prisma.menuItem.findMany();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch menu items' });
    }
});

export default router;
