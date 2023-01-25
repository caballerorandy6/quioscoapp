import axios from "axios";
import { formatearDinero } from "../helpers/index";
import Platillo from "./Platillo";
import { toast } from "react-toastify";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

  //console.log(orden);
  //console.log(pedido);

  const completarOrden = async () => {
    try {
      const data = await axios.post(`/api/ordenes/${id}`);
      toast.success("Orden Lista");
    } catch (error) {
      toast.error("Hubo un error");
    }
  };

  return (
    <div className="border-2 rounded shadow-md p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>

      <div>
        {pedido.map((platillo) => (
          <Platillo key={platillo.id} platillo={platillo} />
        ))}
        <div className="md:flex md:items-center md:justify-between my-10">
          <p className="mt-5 font-black text-4xl text-amber-500">
            Total a Pagar: {formatearDinero(total)}
          </p>

          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 py-3 px-10  uppercase font-bold rounded-lg"
            type="button"
            onClick={completarOrden}
          >
            Completar Orden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orden;
