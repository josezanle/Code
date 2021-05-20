const Text = () => {
  return (
    <div className="text">
      <h3>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt.
      </h3>
      <br />
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <style jsx>{`
        .text {
          width: 500px;
          height: 350px;
          padding: 3em 2em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          border-top: 2px solid grey;
          background: white;
        }
        h3 {
          font-weight: 900;
          margin: 0;
          line-height: 1em;
        }
        p {
          font-style: italic;
          margin: 0;
          line-height: 1.2em;
          font-size: 1.1em;
        }
        // ===============RESPONSIVE==============================
        @media (max-width: 1131px) {
          .text {
            border-top: none;
            padding: 2em 0 0 0;
            justify-content: flex-start;
            // align-items: center;
          }
        }
        @media (max-width: 530px) {
          .text {
            width: 100%;
          }
        }
        @media (max-width: 315px) {
          .text {
            height:100%;
            padding-bottom:1em
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Text;
