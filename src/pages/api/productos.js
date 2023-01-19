import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const productos = await prisma.producto.findMany(); //Encuentra todas las productos que estan en la base de datos
  //console.log(productos);

  res.status(200).json(productos);
}
