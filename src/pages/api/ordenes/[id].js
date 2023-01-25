import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const { id } = req.query; //Recupera el id que se quiere recuperar, el valor id es un String

    const ordenActualizada = await prisma.orden.update({
      where: {
        id: parseInt(id), // Como el id es un String hay que convertirlo en Int ya que en Prisma el id es un Int
      },
      data: {
        estado: true,
      },
    });
    res.status(200).json(ordenActualizada);
  }
}
