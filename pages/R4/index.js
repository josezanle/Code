import Navbar from "../../components/navbar/index";
import Table from "react-bootstrap/Table";

const R4 = ({ data }) => {
  const prices = data.body;
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Consigna R4</h1>
        <h3>
          En este segmento, utilice el endpoint desarrollado con Express,MongoDB
          y deployado en Heroku, retornara de cada uno:
        </h3>
        <ul>
          <li>Plan</li>
          <li>Description</li>
          <li>Price</li>
          <li>Features</li>
        </ul>
        <br />

        <h3>
          Utilizaremos la funcion .map para generar el contenido de la tabla
          dinamicamente, Resultado:
        </h3>
        <br />
        <Table hover responsive bordered variant="dark">
          <thead>
            <tr>
              <th className="text-center">Plan</th>
              <th className="text-center">Description</th>
              <th className="text-center">Price</th>
              <th colSpan="8" className="text-center">
                Features
              </th>
            </tr>
          </thead>
          {/* si existe la data, hacemos la tabla dinamicamente, sino, no retorna valor. */}
          {prices?.map(({ categoria, descripcion, precio, items }, i) => (
            <tbody key={i}>
              <tr>
                <td className="text-center align-middle">{categoria}</td>
                <td className=" align-middle">{descripcion}</td>
                <td className="text-center align-middle">{precio}$</td>
                {items.map((item, i) => (
                  <td key={i} className="text-center align-middle">
                    {item.item}
                  </td>
                ))}
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default R4;

export async function getServerSideProps() {
  const res = await fetch(
    "https://digital-solutions-api.herokuapp.com/products"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
