const Banner = () => {
  return (
    <div className="banner">
      <div className="text">
        <h2>Front-End Challenge</h2>
        <p>Bienvenido/a al challenge de MD Digital Solutions</p>
      </div>

      <style jsx>
        {`
          .banner {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          }
          .text {
            width: 500px;
            padding: 1em;
          }
          h2 {
            font-size: 3em;
            font-variant: small-caps;
          }
          p {
            font-size: 1.5em;
            font-style: italic;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
