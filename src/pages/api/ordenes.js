import { PrismaClient } from "prisma/prisma-client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //Obtener Ordenes
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
  });
  res.status(200).json(ordenes);

  //Crear Ordenes
  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        fecha: req.body.fecha,
        pedido: req.body.pedido,
      },
    });

    console.log(req.body);
    res.status(200).json(orden);
  }
}
