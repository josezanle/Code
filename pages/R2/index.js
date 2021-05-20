import Navbar from "../../components/navbar/index";
import Table from "react-bootstrap/Table";
import data from "./data";

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

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Id</th>
              <th>Edad</th>
              <th>Especialidad</th>
              <th>Framework</th>
              <th>Años de Experiencia</th>
              <th>Pais</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          {/* si existe la data, hacemos la tabla dinamicamente, sino, no retorna valor. */}
          {dataTable?.map((item, i) => (
            <tbody key={i}>
              <tr>
                <td>{item.nombre}</td>
                <td>{item.id}</td>
                <td>{item.edad}</td>
                <td>{item.especialidad}</td>
                <td>{item.framework}</td>
                <td>{item.años_experiencia}</td>
                <td>{item.pais}</td>
                <td>{item.ciudad}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default R2;
