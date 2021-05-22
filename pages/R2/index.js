import Table from "react-bootstrap/Table";
import Navbar from "../../components/navbar";
import { data } from "../../data/data";

// creamos una constante para referenciar la data del archivo importado.
// luego utilizamos la funcion .map para traer todos los campos.
const dataTable = data;

const R2 = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Consigna R2</h1>
        <br />
        <h3>
          En este segmento, utilice un archivo Data.js, que contiene un Array de
          empleados, retornara de cada uno:
        </h3>
        <ul>
          <li>Nombre</li>
          <li>Id</li>
          <li>Edad</li>
          <li>Especialidad</li>
          <li>Framework</li>
          <li>Años de Experiencia</li>
          <li>Pais</li>
          <li>Ciudad</li>
        </ul>
        <br />
        <h3>Importamos el Archivo</h3>
        <p>import Data from "./data"</p>
        <br />
        <h3>
          Grabamos en una constante la info que nos retorna el archivo Data.js
        </h3>
        <p>const dataTable = Data;</p>
        <br />
        <h3>
          Utilizaremos la funcion .map para generar el contenido de la tabla
          dinamicamente, Resultado:
        </h3>

        <br />

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Id</th>
              <th className="text-center">Edad</th>
              <th className="text-center">Especialidad</th>
              <th className="text-center">Framework</th>
              <th className="text-center">Años de Experiencia</th>
              <th className="text-center">Pais</th>
              <th className="text-center">Ciudad</th>
            </tr>
          </thead>
          {/* si existe la data, hacemos la tabla dinamicamente, sino, no retorna valor. */}
          {dataTable?.map((item, i) => (
            <tbody key={i}>
              <tr>
                <td className="text-center align-middle">{item.nombre}</td>
                <td className="text-center align-middle">{item.id}</td>
                <td className="text-center align-middle">{item.edad}</td>
                <td className="text-center align-middle">
                  {item.especialidad}
                </td>
                <td className="text-center align-middle">{item.framework}</td>
                <td className="text-center align-middle">
                  {item.años_experiencia}
                </td>
                <td className="text-center align-middle">{item.pais}</td>
                <td className="text-center align-middle">{item.ciudad}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default R2;
