import Head from "next/head";
import Image from "next/image";
import Layout from "@/layout/Layout";
import { PrismaClient } from "@prisma/client";

export default function Home({ categorias }) {
  console.log(categorias);
  return (
    <Layout>
      <Head>
        <title>Café - {"Home"}</title>
        <meta name="description" content="Quiosco Cafetería, Home" />
      </Head>
      <h1>Inicio</h1>
    </Layout>
  );
}

//Consultando la base de datos con getServerSideProps
/*export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return {
    props: {
      categorias,
    },
  };
};*/
