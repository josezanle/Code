const src = "https://www.youtube.com/watch?v=cfBAJSk3Xrc&t=7902s";

const Video = () => {
  return (
    <div className="video">
      <video src="/video/video.mp4" controls muted loop />

      <style jsx>{`
        .video {
          width: 500px;
          height: 350px;
          border-top: 2px solid grey;
        }
        video {
          width: 500px;
          height: 350px;
          object-fit: cover;
          outline: none;
        }
        // ===============RESPONSIVE==============================
        @media (max-width: 1159px) {
          .video {
            border-top: none;
          }
        }
        @media (max-width: 530px) {
          .video,
          video {
            width: 100%;
          }
        }
        @media (max-width: 400px) {
          .video,
          video {
            height: 300px;
          }
        }
        @media (max-width: 320px) {
          .video,
          video {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Video;
