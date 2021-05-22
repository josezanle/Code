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
            min-height: 85vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(
              to top,
              hsla(203, 20%, 84%, 0.7) 0%,
              hsla(201, 32%, 91%, 0.7) 100%
            ),
              url(/images/banner.jpg);
            background-size: cover;
            background-repeat: no-repeat;
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
