import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    },
  }); //Encuentra todas las categorias que estan en la base de datos
  //console.log(categorias);

  res.status(200).json(categorias);
}
