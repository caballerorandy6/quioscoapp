import Image from "next/image";

const Platillo = ({ platillo }) => {
  const { imagen, nombre, precio, cantidad } = platillo;

  return (
    <div className="py-3 flex border-b last-of-type:border-0 items-center">
      <div className="w-32">
        <Image
          width={400}
          height={500}
          src={`/assets/img/${imagen}.jpg`}
          alt={`Imagen Platillo ${nombre}`}
          priority
        />
      </div>

      <div className="p-5 space-y-2">
        <h4 className="text-xl font-bold text-amber-500">{nombre}</h4>
        <p className="text-lg font-bold">Cantidad: {cantidad}</p>
      </div>
    </div>
  );
};

export default Platillo;
