import Navbar from "../../components/navbar";
import Text from "./text";
import Video from "./video";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="container-all">
        <div className="box">
          <h2>Consigna R3</h2>
          <Video />
          <Text />
        </div>
        <style jsx>{`
          .container-all {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2em 5em;
            flex-wrap: wrap;
          }
          h2 {
            width: 100vw;
            text-align: center;
          }
          .box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }
          // ==================RESPONSIVE===============================
          @media (max-width: 1159px) {
            .container-all {
              padding: 1em;
            }
            .box {
              justify-content: center;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default index;
