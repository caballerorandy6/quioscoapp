import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const productos = await prisma.producto.findMany(); //Encuentra todas las productos que estan en la base de datos
  //console.log(productos);

  res.status(200).json(productos);
}
