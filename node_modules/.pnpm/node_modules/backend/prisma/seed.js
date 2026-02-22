import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // 1. Create default Admin
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.admin.upsert({
        where: { email: 'admin@hotel.com' },
        update: {},
        create: {
            email: 'admin@hotel.com',
            password: hashedPassword,
        },
    });

    // 2. Create Rooms
    const rooms = [
        {
            name: 'Standard Single',
            type: 'standard',
            price: 50,
            capacity: 1,
            description: 'A cozy room for a solo traveler with all essential amenities.',
            available: true,
        },
        {
            name: 'Deluxe Double',
            type: 'deluxe',
            price: 120,
            capacity: 2,
            description: 'Spacious room with a king-size bed and a partial city view.',
            available: true,
        },
        {
            name: 'Luxury Suite',
            type: 'suite',
            price: 250,
            capacity: 4,
            description: 'The ultimate luxury experience with a separate living area and panoramic views.',
            available: true,
        },
    ];

    for (const room of rooms) {
        await prisma.room.upsert({
            where: { id: rooms.indexOf(room) + 1 }, // Note: id might differ if reset
            update: room,
            create: room,
        });
    }

    // 3. Create Menu Items
    const menuItems = [
        {
            name: 'Traditional Breakfast',
            category: 'breakfast',
            price: 15,
            description: 'Fresh eggs, bread, honey, and local coffee.',
        },
        {
            name: 'Grilled Salmon',
            category: 'lunch',
            price: 35,
            description: 'Wild-caught salmon with seasonal vegetables.',
        },
        {
            name: 'Vegetarian Pasta',
            category: 'dinner',
            price: 22,
            description: 'Handmade pasta with fresh tomatoes and herbs.',
        },
    ];

    for (const item of menuItems) {
        await prisma.menuItem.upsert({
            where: { id: menuItems.indexOf(item) + 1 },
            update: item,
            create: item,
        });
    }

    console.log('Seeding complete.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
