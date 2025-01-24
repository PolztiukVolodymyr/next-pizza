import { categories } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "Test User",
                email: "testUser@gmail.com",
                password: hashSync("1111111", 10),
                verified: new Date(),
                role: "USER",
            },
            {
                fullName: "TestAdmin",
                email: "testAdmin@gmail.com",
                password: hashSync("2222222", 10),
                verified: new Date(),
                role: "ADMIN",
            },
        ],
    });

    await prisma.category.createMany({
        data: categories,
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (er) {
        console.error(er);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
