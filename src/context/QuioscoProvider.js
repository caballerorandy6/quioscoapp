import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [paso, setPaso] = useState(1);

  //Obtener Categorias
  const obtenerCategorias = async () => {
    try {
      const { data } = await axios("/api/categorias");
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  //Detectando la categoria actual
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
  };

  //Detectando Categoria por defecto
  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  //Utilizando la funcion handleSetProducto para no utilizar directamente la funcion setProducto
  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  //Añadiendo un nuevo producto, tomando el objeto producto sin la categoriaId y sin la imagen, detectando si el producto esta duplicado
  const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      //Actualizar la cantidad
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al pedido");
    }

    setModal(false);
  };

  const handleChangePaso = (paso) => {
    setPaso(paso);
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        paso,
        handleChangePaso,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
