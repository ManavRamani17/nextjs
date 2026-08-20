import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  connectionLimit: 5,   
  user: "root",
  password: "100617",
  database: "student",
});
const prisma = new PrismaClient({ adapter });
export { prisma };  