import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const categorias = await prisma.categoria.findMany(); //Encuentra todas las categorias que estan en la base de datos
  //console.log(categorias);

  res.status(200).json(categorias);
}
