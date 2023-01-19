import { Prayers, PrismaClient, Role, User } from "@prisma/client";
const prisma = new PrismaClient();
const users = [
  {
    email: 'atlante@drummerboyhosting.com',
    password: '$2a$12$Crizqqd45d4dxh9SazqPf.9Vby4LGW04OFjcp.wHXaAzpW5y/d3ly',
    name: 'Atlante Avila',
    role: 'ADMIN' as Role,
  }
]

const prayers = [
  {
    id: 0,
    title: 'Prayer for my sons',
    text: 'I pray that my children grow up to be good boys. No addiction and Godly men.',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
  }
]

async function main() {
  await prisma.user.createMany({
    data: users
  })
  await prisma.prayers.createMany({
    data: prayers
  })
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})