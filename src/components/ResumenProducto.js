import Image from "next/image";
import { formatearDinero } from "../helpers/index";
import useQuiosco from "@/hooks/useQuiosco";

const ResumenProducto = ({ producto }) => {
  const { handleEditarCantidad, handleEliminarProducto } = useQuiosco();

  const { nombre, imagen, cantidad, precio, id } = producto;

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${nombre}`}
          src={`/assets/img/${imagen}.jpg`}
        />
      </div>

      <div className="md:w-4/6">
        <p className="text-3xl font-bold">{nombre}</p>
        <p className="text-xl font-bold">Cantidad: {cantidad}</p>
        <p className="text-xl font-bold text-amber-500">Precio: {precio}</p>
        <p className="text-sm font-bold mt-2">
          Subtotal: {formatearDinero(precio * cantidad)}
        </p>
      </div>

      <div className="flex flex-col gap-4 md:w-1/6">
        <button
          onClick={() => handleEditarCantidad(id)}
          type="button"
          className="flex gap-2 bg-sky-700 hover:bg-sky-500 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
          Editar
        </button>

        <button
          onClick={() => handleEliminarProducto(id)}
          type="button"
          className="bg-red-700 hover:bg-red-500 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ResumenProducto;
